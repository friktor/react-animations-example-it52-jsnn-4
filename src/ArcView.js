import React, { Component } from "react";

import {
  Dimensions,
  StatusBar,
  Animated,
  Easing,
  Text
} from "react-native";

import * as Animatable from "react-native-animatable";
import styles from "./styles";

const { height, width } = Dimensions.get("window");
const { View, Image } = Animated;

// Material Easing In
const EasingIn = {
  easing: Easing.bezier(0, 0, 0.2, 1)
};

const EasingOut = {
  easing: Easing.bezier(0.4, 0, 1, 1)
};

export default class ArcView extends Component {
  constructor() {
    super();

    this.arcStyle = {
      borderRadius: new Animated.Value(15000),
      height: new Animated.Value(50),
      width: new Animated.Value(50),
    };

    // Анимация для показа основного экрана - паралельное выполнение нескольких анимаций
    this.ArcShowScreen = Animated.parallel([
      Animated.timing(this.arcStyle.height, {
        toValue: height,
        duration: 500,
        ...EasingIn
      }),
      Animated.timing(this.arcStyle.width, {
        toValue: height,
        duration: 500,
        ...EasingIn
      }),
      Animated.timing(this.arcStyle.borderRadius, {
        duration: 500,
        toValue: 0,
        ...EasingIn
      })
    ]);

    this.showHelloMessage = this.showHelloMessage.bind(this);
    this.startShowScreen = this.startShowScreen.bind(this);
  }

  componentDidMount() {
    this.startShowScreen();
    setTimeout(() => StatusBar.setBarStyle('light-content', true), 1500);
    this.showHelloMessage();
  }

  // Запуск задач по очереди
  startShowScreen() {
    setTimeout(() => (
      Animated.sequence([
        this.ArcShowScreen
      ]).start()
    ), 1500);
  }

  showHelloMessage() {
    setTimeout(() => (this.refs.hello.transitionTo({
      marginTop: 150,
      opacity: 1
    }, 400)), 1500);

    setTimeout(() => (this.refs.image.transitionTo({
      marginTop: 60,
      opacity: 1
    }, 400)), 1900);

    setTimeout(() => (this.refs.desc.transitionTo({
      marginTop: 40,
      opacity: 1
    }, 400)), 2300);    
  }

  render() {
    return (
      <View style={[styles.arc, this.arcStyle]}>
        {/* Анимированный компонент - использует Прямое Нативное Взаимодействие*/}
        <Animatable.Text ref="hello" style={styles.arc__text}>
          Привет JSNN#4!
        </Animatable.Text>
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" ref="image" style={styles.arc__image__box}>
          <Image style={styles.arc__image} source={require('./react.png')}/>
        </Animatable.View>
        <Animatable.Text ref="desc" style={[styles.arc__text, { fontSize: 18, fontStyle: 'italic' }]}>
          Сегодня будем говорить о анимации!
        </Animatable.Text>        
      </View>
    );
  }
}
