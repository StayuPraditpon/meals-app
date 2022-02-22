import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MainMenuList = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.gridItem,
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <ImageBackground
        source={props.imageUrl ? {uri: props.imageUrl} : '' }
        style={styles.imageBg}
      >
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.gridTitle}} numberOfLines={1}>
            {props.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MainMenuList;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
  },
  titleContainer: {
    alignItems: "center",
  },
  gridTitle: {
    marginHorizontal: 10,
    color: "white",
    shadowOffset: { width: 2, height: 0},
    shadowOpacity: 0.3,
    shadowColor: 'black',
    shadowRadius: 1.5,
    elevation: 5,
    fontSize: 20,
    fontFamily: "open-sans",
  },
  imageBg: {
    width: "100%",
    height: "100%",
  },
});
