import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './config/routes';
import { withAuthenticator } from 'aws-amplify-react-native';

const App = () => (
  <>
    <StatusBar />
    <Routes />
  </>
);

export default App;
