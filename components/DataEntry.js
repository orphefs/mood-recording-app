import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Screen from "./Screen";
import AppPicker from "./Picker";
import moods from "../config/moods";
import feelings from "../config/feelings";
import Button from "./Button";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

// TODO: need to fix delayed array update

export default function DataEntry({ transformedData, setTransformedData }) {
  const [data, setData] = useState({ feeling: null, mood: null });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    transformDataForVisualization();
  }, [dataArray]);

  // useEffect(() => {}, [transformedData]);

  const handleSelectFeeling = (item) => {
    setData({ ...data, feeling: item });
  };

  const handleSelectMood = (item) => {
    setData({ ...data, mood: item });
  };

  const submitEntry = () => {
    if (!data.feeling || !data.mood) {
      alert("Please select your feeling and mood.");
      return;
    }
    const newData = JSON.parse(JSON.stringify(data)); // deep copy
    const newDataArray = dataArray.concat(newData);
    setDataArray(newDataArray);
  };

  const transformDataForVisualization = () => {
    const dataR = feelings.map((feeling) => {
      return {
        feeling: feeling.label,
        mood: dataArray
          .filter((x) => x.feeling === feeling.label)
          .map((x) => x.mood),
      };
    });
    setTransformedData(dataR);
  };

  return (
    <View style={styles.container}>
      <AppText>How do you feel?</AppText>
      <AppPicker
        items={feelings}
        name="feeling"
        placeholder="Feeling"
        onSelectItem={(item) => handleSelectFeeling(item.label)}
      />
      <AppText>Select your mood...</AppText>
      <AppPicker
        items={moods}
        name="mood"
        placeholder="Mood"
        onSelectItem={(item) => handleSelectMood(item.label)}
      />
      <Button
        onPress={submitEntry}
        title="Submit"
        accessibilityLabel="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
});
