import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Screen from "../components/Screen";
import AppPicker from "../components/Picker";
import moods from "../config/moods";
import feelings from "../config/feelings";

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

export default function DataEntryScreen() {
  const [data, setData] = useState({});

  const [selectedValue, setSelectedValue] = useState("java");

  const handleSelect = (name, item) => {
    {
    }
    setData();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ width: "60%" }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {feelings.map((feeling) => (
            <Picker.Item label={feeling.label} value={feeling.value} />
          ))}
        </Picker>
        <AppPicker
          items={moods}
          name="mood"
          placeholder="Mood"
          style={{ width: "60%" }}
          onSelectItem={(item) => handleSelect(item)}
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
