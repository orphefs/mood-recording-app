import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./components/Screen";
import ColoredSlider from "./components/ColoredSlider";
import FeelingsScreen from "./screens/FeelingsScreen";

export default function App() {
  return <FeelingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
});
