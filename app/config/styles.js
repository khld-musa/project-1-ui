import { Platform } from "react-native";
import { COLORS } from "./theme";

export default {
  text: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
