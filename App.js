import { StyleSheet, Text, View } from "react-native";
import RoundedSquare from "./components/shapes/RoundedSquare";
import Screen from "./components/Screen";
import ColoredSlider from "./components/ColoredSlider";

const moodColorsFrustrated = [
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "yellow",
];
const moodColorsMeh = [
  "red",
  "orange",
  "orange",
  "orange",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
];
const moodColorsContent = [
  "yellow",
  "yellow",
  "green",
  "green",
  "green",
  "green",
  "green",
];
const moodColorsHappy = [
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
];

const allMoodColors = [
  moodColorsFrustrated,
  moodColorsContent,
  moodColorsHappy,
  moodColorsMeh,
];

const feeling = "frustrated";

export default function App() {
  const computeWidth = (moodColors, allMoodColors) => {
    const percentage = (moodColors.length / allMoodColors.length) * 100;
    return percentage;
  };

  return (
    <>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              width: computeWidth(moodColorsMeh, allMoodColors),
            }}
          >
            <ColoredSlider feeling={"Meh"} moodColors={moodColorsMeh} />
          </View>
          <View
            style={{
              flex: 1,
              width: computeWidth(moodColorsContent, allMoodColors),
            }}
          >
            <ColoredSlider feeling={"Content"} moodColors={moodColorsContent} />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
});
