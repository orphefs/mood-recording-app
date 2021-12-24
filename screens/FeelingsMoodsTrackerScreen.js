import { StyleSheet, Text, View } from "react-native";
import DataEntry from "../components/DataEntry";
import FeelingsVisualization from "../components/FeelingsVisualization";
import Screen from "../components/Screen";

export default function FeelingsMoodsTrackerScreen({
  transformedData,
  setTransformedData,
}) {
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
    margin: 40,
    // alignItems: "center",
    justifyContent: "center",
  },
});
