import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ColoredSlider from "../components/ColoredSlider";

export default function FeelingsVisualization({ transformedData }) {
  const [totalCount, setTotalCount] = useState(0);
  const [allMoodColors, setAllMoodColors] = useState([]);

  const [moodColorsMeh, setMoodColorsMeh] = useState([]);
  const [moodColorsFrustrated, setMoodColorsFrustrated] = useState([]);
  const [moodColorsContent, setMoodColorsContent] = useState([]);
  const [moodColorsHappy, setMoodColorsHappy] = useState([]);
  ``;
  const [barWidths, setBarWidths] = useState({});

  useEffect(() => {
    if (transformedData) {
      computeWidths();
    }
  }, [transformedData]); // The second parameters are the variables this useEffect is listening to for changes.

  const getLengthOfLargestArray = (array) => {
    const lengths = array.map((a) => a.length);
    console.log("array", array);
    console.log("lengths", lengths);
    const maxLengths = Math.max(...lengths);
    console.log("maxLengths", maxLengths);
    if (maxLengths !== -Infinity) return maxLengths;
    return 0;
  };

  const computeWidths = () => {
    const moodColorsFrustrated = transformedData
      .filter((item) => item.feeling === "Frustrated")
      .map((item) => item.mood)[0];

    console.log("moodColorsFrustrated", moodColorsFrustrated);
    const moodColorsContent = transformedData
      .filter((item) => item.feeling === "Content")
      .map((item) => item.mood)[0];
    const moodColorsHappy = transformedData
      .filter((item) => item.feeling === "Happy")
      .map((item) => item.mood)[0];
    const moodColorsMeh = transformedData
      .filter((item) => item.feeling === "Meh")
      .map((item) => item.mood)[0];

    setMoodColorsMeh(moodColorsMeh);
    setMoodColorsFrustrated(moodColorsFrustrated);
    setMoodColorsContent(moodColorsContent);
    setMoodColorsHappy(moodColorsHappy);

    setAllMoodColors([
      moodColorsFrustrated,
      moodColorsContent,
      moodColorsHappy,
      moodColorsMeh,
    ]);

    const bars = {};
    bars.Frustrated = computeWidth(moodColorsFrustrated);
    bars.Content = computeWidth(moodColorsContent);
    bars.Happy = computeWidth(moodColorsHappy);
    bars.Meh = computeWidth(moodColorsMeh);

    setBarWidths(bars);
    console.log(barWidths);
  };

  const computeWidth = (moodColors) => {
    const maxLength = getLengthOfLargestArray(allMoodColors);
    const percentage = (moodColors.length / maxLength) * 100;

    console.log("moodcolorslength", moodColors.length);

    console.log("Percentage", percentage);
    if (!percentage) return "0%";
    return percentage.toString() + "%";
  };

  return (
    <>
      <Screen>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              width: barWidths["Meh"],
            }}
          >
            <ColoredSlider feeling={"Meh"} moodColors={moodColorsMeh} />
          </View>
          <View
            style={{
              flex: 1,
              width: barWidths["Content"],
            }}
          >
            <ColoredSlider feeling={"Content"} moodColors={moodColorsContent} />
          </View>
          <View
            style={{
              flex: 1,
              width: barWidths["Happy"],
            }}
          >
            <ColoredSlider feeling={"Happy"} moodColors={moodColorsHappy} />
          </View>
          <View
            style={{
              flex: 1,
              width: barWidths["Frustrated"],
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
    marginLeft: 20,
  },
});
