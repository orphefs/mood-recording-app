import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    ...Platform.select({
      //spread object
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Cabin_700Bold",
      },
    }),
  },
};
