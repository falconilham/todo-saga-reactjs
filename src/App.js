//Css
import './App.css';
import 'antd/dist/antd.min.css'
//redux
import { Provider } from 'react-redux';
import store from './redux/store'
//Component
import { Div } from './component/Core-ui';
import Modal from './component/Modal';
import Loading from './component/Loading'
//Screen
// import Home from './screen/Home'
import Home from './screen/Home'

function App() {
  return (
    <Provider store={store}>
      <Div className="App">
        <Modal />
        <Home />
        <Loading />
      </Div>
    </Provider>
  );
}

export default App;
