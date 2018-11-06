import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import App from './app/App';
import { store } from './app/store'

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('StartProject', () => Main);
