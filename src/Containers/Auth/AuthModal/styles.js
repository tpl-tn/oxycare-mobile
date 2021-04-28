import { StyleSheet, Dimensions } from "react-native";
import theme from "@theme";
const width = Dimensions.get("screen").width;
const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
textCansel:{
    fontSize: 30, color: theme.COLOR_WITHE
},
  ButtonCansel: {
    height: 60,
    width: 60,
    backgroundColor: theme.PRIMARY_COLOR,
    position: "absolute",
    right: 20,
    top: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Styles;
