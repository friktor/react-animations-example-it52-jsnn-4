import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";

import styles from "./src/styles";
import ArcView from "./src/ArcView";


class ReactAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ArcView />
      </View>
    );
  }
}

AppRegistry.registerComponent("ReactAnimation", () => ReactAnimation);
