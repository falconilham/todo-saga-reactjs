import { Spin } from 'antd';
import { useSelector } from 'react-redux';

const Loading = () => {
    const { isLoading } = useSelector(state => state.loading)
    return <Spin size='large' spinning={isLoading} />
}

export default Loading