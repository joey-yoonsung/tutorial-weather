import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    color: ["#00C6FB", "#005BEA"],
    title: 'Raining like MF',
    subTitle: 'For more info look outside',
    icon: 'weather-rainy'
  },
  Clear: {
    color: ["#FEF253", "#FF7300"],
    title: 'Sunny as fuck',
    subTitle: 'Go get your ass burnt',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    color: ["#00ECBC", "#007ADF"],
    title: 'Thunderstorm in the house',
    subTitle: 'Actually outside of house',
    icon: 'weather-lightning'
  },
  Clouds: {
    color: ["#D7D2CC", "#304352"],
    title: 'Clouds',
    subTitle: 'I know, fucking boring',
    icon: 'weather-cloudy'
  },
  Mist: {
    color: ["#D7D2CC", "#304352"],
    title: 'Mist',
    subTitle: "It's like you have no glasses.",
    icon: 'weather-fog'
  },
  Snow: {
    color: ["#7DE2FC", "#B9B6E5"],
    title: 'Cold as balls',
    subTitle: 'Do you want to build snowman? Fuck no.',
    icon: 'weather-snowy'
  },
  Drizzle: {
    color: ["#89F7FE", "#66A6FF"],
    title: 'Drizzle',
    subTitle: 'Is like rain, but gay🏳️🌈',
    icon: 'weather-hail'
  },
  Haze: {
    color: ["#89F7FE", "#66A6FF"],
    title: 'Haze',
    subTitle: "Don't know what that is 😅",
    icon: 'weather-hail'
  }
  // clear sky
  // few clouds
  // scattered clouds
  // broken clouds
  // shower rain
  // rain
  // thunderstorm
  // snow
  // mist
}
Weather.propTypes = {
  weatherName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

const curWeather = 'Haze';

function Weather({weatherName, temp}) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases[weatherName].color}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subTitle}>{weatherCases[weatherName].subTitle}</Text>
      </View>
    </LinearGradient>
  )
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  },
  upper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  lower: {
    fontSize: 48,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white"
  },
  subTitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
})

