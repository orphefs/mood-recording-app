import { StyleSheet, Text, View } from "react-native";
import DataEntry from "./screens/DataEntry";
import DataEntryScreen from "./screens/DataEntry";
import FeelingsVisualization from "./screens/FeelingsVisualization";
import Screen from "./components/Screen";
import { useState } from "react/cjs/react.development";

export default function App() {
  const [transformedData, setTransformedData] = useState([
    { feeling: "Meh", mood: ["green", "red"] },
    { feeling: "Content", mood: ["green", "green"] },
    { feeling: "Happy", mood: [] },
    { feeling: "Frustrated", mood: [] },
  ]);

  return (
    <Screen>
      <View style={styles.container}>
        <DataEntry
          transformedData={transformedData}
          setTransformedData={setTransformedData}
        />
        <FeelingsVisualization transformedData={transformedData} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
