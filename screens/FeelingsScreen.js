import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ColoredSlider from "../components/ColoredSlider";

const moodColorsFrustrated = [
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "yellow",
];

const moodColorsMeh = [
  ...Array(1).fill("red"),
  ...Array(3).fill("orange"),
  ...Array(19).fill("yellow"),
];

const moodColorsContent = [
  ...Array(3).fill("yellow"),
  ...Array(15).fill("green"),
];

const moodColorsHappy = Array(13).fill("green");

const allMoodColors = [
  moodColorsFrustrated,
  moodColorsContent,
  moodColorsHappy,
  moodColorsMeh,
];

const feeling = "frustrated";

export default function FeelingsScreen() {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(getLengthOfLargestArray(allMoodColors));
  }, []);

  const getLengthOfLargestArray = (array) => {
    const lengths = array.map((a) => a.length);
    return Math.max(...lengths);
  };

  const computeWidth = (moodColors) => {
    const percentage = (moodColors.length / totalCount) * 100;
    return percentage.toString() + "%";
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
          <View
            style={{
              flex: 1,
              width: computeWidth(moodColorsHappy, allMoodColors),
            }}
          >
            <ColoredSlider feeling={"Happy"} moodColors={moodColorsHappy} />
          </View>
          <View
            style={{
              flex: 1,
              width: computeWidth(moodColorsFrustrated, allMoodColors),
            }}
          >
            <ColoredSlider
              feeling={"Frustrated"}
              moodColors={moodColorsFrustrated}
            />
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
