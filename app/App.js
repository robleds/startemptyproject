import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
import WelcomeIndex from './screens/splash/index'
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


export class App extends Component {
  render() {
    return (

      <Router>

        <Scene key="root">


          <Scene key="splash" component={WelcomeIndex} initial />
          

        </Scene>

      </Router>

    );
  }
}

export default App