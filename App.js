import { StyleSheet, Text, View } from "react-native";
import RoundedSquare from "./components/shapes/RoundedSquare";
import Screen from "./components/Screen";
import ColoredSlider from "./components/ColoredSlider";

const moodColors = ["orange", "orange", "orange", "orange", "orange", "yellow"];
const feeling = "frustrated";

export default function App() {
  return (
    <>
      <Screen>
        <ColoredSlider feeling={feeling} moodColors={moodColors} />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
