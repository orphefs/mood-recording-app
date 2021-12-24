import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ColoredSlider from "../components/ColoredSlider";
import feelings from "../config/feelings";

export default function FeelingsVisualization({ transformedData }) {
  const [totalCount, setTotalCount] = useState(0);
  const [allMoodColors, setAllMoodColors] = useState([]);
  const [barWidths, setBarWidths] = useState({});

  useEffect(() => {
    if (transformedData) {
      computeWidths();
    }
  }, [transformedData]); // The second parameters are the variables this useEffect is listening to for changes.

  useEffect(() => {
    console.log("barWidths", barWidths);
  }, [barWidths]);

  const getLengthOfLargestArray = (array) => {
    const lengths = array.map((a) => a.length);
    // console.log("array", array);
    // console.log("lengths", lengths);
    const maxLengths = Math.max(...lengths);
    // console.log("maxLengths", maxLengths);
    if (maxLengths !== -Infinity) return maxLengths;
    return 0;
  };

  const getMoodColors = (feeling) => {
    return transformedData
      .filter((item) => item.feeling === feeling)
      .map((item) => item.mood)[0];
  };

  const computeWidths = () => {
    const bars = {};
    bars.Frustrated = computeWidth(getMoodColors("Frustrated"));
    bars.Content = computeWidth(getMoodColors("Content"));
    bars.Happy = computeWidth(getMoodColors("Happy"));
    bars.Meh = computeWidth(getMoodColors("Meh"));

    setBarWidths(bars);
  };

  const computeWidth = (moodColors) => {
    const maxLength = getLengthOfLargestArray([
      getMoodColors("Frustrated"),
      getMoodColors("Content"),
      getMoodColors("Happy"),
      getMoodColors("Meh"),
    ]);
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
          {feelings.map((feeling) => (
            <View
              style={{
                flex: 1,
                width: barWidths[feeling.label],
              }}
            >
              <ColoredSlider
                feeling={feeling.label}
                moodColors={getMoodColors(feeling.label)}
              />
            </View>
          ))}
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
