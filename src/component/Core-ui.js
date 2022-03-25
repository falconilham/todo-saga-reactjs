import { Typography } from 'antd';

export function Div({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export function Text({ children, link, ...props }) {
    if (link) {
        return (
            <Typography style={{cursor: 'pointer'}} {...props}>
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
