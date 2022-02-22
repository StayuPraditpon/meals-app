import { Dimensions } from "react-native";

// console.log(Dimensions.get("window").height / Dimensions.get("window").width);

const startScale = () => {
  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width
  if(height > width) {
    return height / width
  }else {
    return width / height
  }
}

export default {
  header: {
    fontSize: 40,
    fontFamily: "caesar-dressing",
  },
  body: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
  cardTitle: {
    fontSize:
     20,
    fontFamily: "open-sans",
  },
};
