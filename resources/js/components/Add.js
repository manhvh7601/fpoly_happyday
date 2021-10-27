import axios from 'axios';
import React from 'react'
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

class Add extends React.Component {
    constructor(props) {
        super(props)
    }

    hanldeSubmit = (e) => {
        e.preventDefault();
        const { form, history } = this.props;

        form.validateFields((err, value) => {
            if (!err) {
                axios.post('/api/post', value).then(response => {
                    history.push('/')
                }).catch(error => {
                    console.log(error);
                })
            }
        });
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="Tên bài viết">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Vui lòng nhập tên bài viết!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Nội dung">
                    {getFieldDecorator('desc', {
                        rules: [{ required: true, message: 'Vui lòng nhập nội dung bài viết!' }],
                    })(<TextArea rows={6} />)}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrappedAdd = Form.create({name: 'addForm'})(Add);
export default Add;
