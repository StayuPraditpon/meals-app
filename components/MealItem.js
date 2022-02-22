import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  const {title, complexity, affordability, duration, imageUrl} = props
  return (
    <TouchableOpacity
      style={{
        ...styles.touchContainer,
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <View>
        <ImageBackground
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <View style={styles.textContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText} numberOfLines={1}>
                {title}
              </Text>
            </View>
            <View style={styles.footerContainer} numberOfLines={1}>
              <Text style={styles.footerText}>{complexity}</Text>
              <Text style={styles.footerText}>{affordability}</Text>
              <Text style={styles.footerText}>{duration}m</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    marginVertical: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  headerText: {
    fontSize: 15,
    color: "white",
    fontFamily: "open-sans",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  footerContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerText: {
    color: "white",
    fontSize: 15,
    fontFamily: "open-sans",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowColor: "black",
    shadowRadius: 0.5,
    elevation: 5,
  },
});

export default MealItem;
