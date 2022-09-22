import { Typography, Spin } from 'antd';

function Div({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

function Text({ children, link, ...props }) {
    if (link) {
        return (
            <Typography style={{ cursor: 'pointer' }} {...props}>
                {children}
            </Typography>
        )

    } else {
        return (
            <Typography {...props}>
                {children}
            </Typography>
        )
    }
}

const Loading = (isLoading) => <Spin size='large' spinning={isLoading} />

export { Div, Text, Loading }
