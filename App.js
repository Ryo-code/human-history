import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './src/reducers';
import { Header } from "./src/components/common";
import TimesList from './src/components/TimesList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Timeline of Human History"/>
          <TimesList/>
        </View>
      </Provider>
    );
  }
}