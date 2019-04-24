import React from 'react';
import AppContainer from './components/navigation/AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>

    )
  }
}

export default App;