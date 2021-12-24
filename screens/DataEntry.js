import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Screen from "../components/Screen";
import AppPicker from "../components/Picker";
import moods from "../config/moods";
import feelings from "../config/feelings";
import Button from "../components/Button";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

// TODO: need to fix delayed array update

export default function DataEntry({ transformedData, setTransformedData }) {
  const [data, setData] = useState({ feeling: null, mood: null });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    console.log("dataArray inside useEffect hook", dataArray);
    transformDataForVisualization();
    console.log("transformedData inside useEffect hook", transformedData);
  }, [dataArray]);

  useEffect(() => {
    console.log("trasnformed data in useEffect hook", transformedData);
  }, [transformedData]);

  const handleFeelingChange = (item) => {
    setData({ ...data, feeling: item });
    // data.feeling = item;
    // setData(data);
    console.log("data var on handleFeelingChange", data);
  };

  const handleSelectMood = (item) => {
    setData({ ...data, mood: item });
    // data.mood = item;
    // setData(data);
    console.log("data var on handleSelectMood", data);
  };

  const submitEntry = () => {
    if (!data.feeling || !data.mood) {
      alert("Please select your feeling and mood.");
      return;
    }
    const newData = JSON.parse(JSON.stringify(data)); // deep copy
    console.log("newData inside submitEntry", newData);
    const newDataArray = dataArray.concat(newData);
    setDataArray(newDataArray);
    console.log("newDataArray inside submitEntry", newDataArray);
    console.log("dataArray inside submitEntry", dataArray);

    // console.log(dataArray);
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
    // console.log(data);
    setTransformedData(dataR);
  };

  return (
    <View style={styles.container}>
      <AppText>How do you feel?</AppText>
      <Picker
        // Picker does not support custom fonts on Android
        selectedValue={data.feeling}
        textStyle={{ color: "blue", fontFamily: "Cabin_700Bold" }}
        itemTextStyle={{ fontFamily: "Cabin_700Bold" }}
        onValueChange={(itemValue, itemIndex) => handleFeelingChange(itemValue)}
      >
        {feelings.map((feeling) => (
          <Picker.Item
            key={feeling.value.toString()}
            label={feeling.label}
            value={feeling.label}
          />
        ))}
      </Picker>
      <AppText>Select your mood...</AppText>
      <AppPicker
        items={moods}
        name="mood"
        placeholder="Mood"
        // style={{ width: "60%" }}
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
