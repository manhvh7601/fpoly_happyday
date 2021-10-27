import axios from 'axios';
import { react } from 'laravel-mix'
import React from 'react'

class ListPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/api/posts').then(responsive => {
            this.setState({
                data: 
            })
        })
    }
}

export default ListPosts;
