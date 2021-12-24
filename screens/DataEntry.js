import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Screen from "../components/Screen";
import AppPicker from "../components/Picker";
import moods from "../config/moods";
import feelings from "../config/feelings";
import { Button } from "react-native";

// TODO: need to fix delayed array update

export default function DataEntry({ transformedData, setTransformedData }) {
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
    transformDataForVisualization();
    console.log(dataArray);
  };

  const transformDataForVisualization = () => {
    const data = feelings.map((feeling) => {
      return {
        feeling: feeling.label,
        mood: dataArray
          .filter((x) => x.feeling === feeling.label)
          .map((x) => x.mood),
      };
    });
    console.log(data);
    setTransformedData(data);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={data.feeling}
        style={{ width: "60%" }}
        onValueChange={(itemValue, itemIndex) => handleFeelingChange(itemValue)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
});
