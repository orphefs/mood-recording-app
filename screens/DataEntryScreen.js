import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Screen from "../components/Screen";
import AppPicker from "../components/Picker";
import moods from "../config/moods";
import feelings from "../config/feelings";
import { Button } from "react-native";

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

// TODO: need to fix delayed array update

export default function DataEntryScreen() {
  const [data, setData] = useState({ feeling: "Content", mood: "green" });

  const [dataArray, setDataArray] = useState([]);

  const handleFeelingChange = (item) => {
    data.feeling = item;
    setData(data);
    // console.log(dataArray);
  };

  const handleSelectMood = (item) => {
    data.mood = item;
    setData(data);
    // console.log(dataArray);
  };

  const submitEntry = () => {
    let newData = JSON.parse(JSON.stringify(data)); // deep copy
    setDataArray([...dataArray, newData]);
    console.log(dataArray);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Picker
          selectedValue={data.feeling}
          style={{ width: "60%" }}
          onValueChange={(itemValue, itemIndex) =>
            handleFeelingChange(itemValue)
          }
        >
          {feelings.map((feeling) => (
            <Picker.Item label={feeling.label} value={feeling.label} />
          ))}
        </Picker>
        <AppPicker
          items={moods}
          name="mood"
          placeholder="Mood"
          style={{ width: "60%" }}
          onSelectItem={(item) => handleSelectMood(item.label)}
        />
        <Button
          onPress={() => submitEntry()}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
});
