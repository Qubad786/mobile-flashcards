import React from "react";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index.js";
import AppNavigator from "./navigation";
import { setLocalNotification } from '../utils/notifications';

const store = createStore(rootReducer);

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class Index extends React.Component {

  componentDidMount() {
      setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar
            backgroundColor="#292477"
            barStyle="light-content"
          />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
