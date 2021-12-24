import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import DataEntry from "./components/DataEntry";
import FeelingsVisualization from "./components/FeelingsVisualization";
import Screen from "./components/Screen";
import AppLoading from "expo-app-loading";
import { useState } from "react/cjs/react.development";
import { useFonts, Cabin_700Bold } from "@expo-google-fonts/cabin";
import feelings from "./config/feelings";
import FeelingsMoodsTrackerScreen from "./screens/FeelingsMoodsTrackerScreen";

export default function App() {
  const [transformedData, setTransformedData] = useState(
    feelings.map((feeling) => {
      return {
        feeling: feeling.label,
        mood: [],
      };
    })
  );

  let [fontsLoaded] = useFonts({
    Cabin_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <FeelingsMoodsTrackerScreen
        transformedData={transformedData}
        setTransformedData={setTransformedData}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    // alignItems: "center",
    justifyContent: "center",
  },
});
