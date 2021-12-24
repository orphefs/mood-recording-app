import { StyleSheet, Text, View } from "react-native";
import DataEntry from "./screens/DataEntry";
import DataEntryScreen from "./screens/DataEntry";
import FeelingsVisualization from "./screens/FeelingsVisualization";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <View style={styles.container}>
        <DataEntry />
        <FeelingsVisualization />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
