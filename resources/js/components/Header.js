const { PageHeader, Button } = require("antd");
const { Link } = require("react-router-dom");

class Header extends React.Component {
    render() {
        return (
            <>
                <PageHeader
                    style={{
                        border: '1px solid rbg(245, 255, 240)',
                    }}
                    title="News"
                    extra={[
                        <Link to="create">
                            <Button key="1" type="primary">
                                Add new
                            </Button>
                        </Link>
                    ]}
                />
            </>
        );
    }
}

export default Header;