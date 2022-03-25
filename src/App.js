//Css
import './App.css';
import 'antd/dist/antd.css';
//redux
import { Provider } from 'react-redux';
import store from './redux/store'
//Component
import { Div } from './component/Core-ui';
import Modal from './component/Modal';
//Screen
// import Home from './screen/Home'
import Home from './screen/Home'

function App() {
  return (
    <Provider store={store}>
      <Div className="App">
        <Modal />
        <Home />
      </Div>
    </Provider>
  );
}

export default App;
