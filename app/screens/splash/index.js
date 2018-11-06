import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// Redux Stuff
import { connect } from 'react-redux'
import { mapDispatchToProps } from './../../actions'

class SplashScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    const isUserLogged = this.props.logged;
    const valuePropsRedux = this.props.logged;
    return (
      <View style={styles.container}>
        <Text>Props by Redux: [user is logged? {valuePropsRedux.toString()}]</Text>
        {!isUserLogged && <Button title={'SignIn'} onPress={()=>this.props.signIn('login', 'password')} />}
        {isUserLogged && <Button title={'SignOut'} onPress={()=>this.props.signOut()} />}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

mapStateToProps = (state) => {
  return {
    logged : state.logged
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)