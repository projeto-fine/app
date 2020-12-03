import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './config/routes';
import authConfig from './config/auth';
import {Amplify} from 'aws-amplify';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

console.log(authConfig.cognito.REGION);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: authConfig.cognito.REGION,
    userPoolId: authConfig.cognito.USER_POOL_ID,
    userPoolWebClientId: authConfig.cognito.APP_CLIENT_ID,
  },
});

const App = () => (
  <>
    <StatusBar />
    <Routes />
  </>
);

export default App;
