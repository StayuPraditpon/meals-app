import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress}>
      <Ionicons name={props.icon} size={20} color={'white'}/>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
