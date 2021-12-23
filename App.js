import { StyleSheet, Text, View } from "react-native";
import DataEntryScreen from "./screens/DataEntryScreen";

export default function App() {
  return <DataEntryScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
