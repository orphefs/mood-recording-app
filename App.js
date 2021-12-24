import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import DataEntry from "./screens/DataEntry";
import FeelingsVisualization from "./screens/FeelingsVisualization";
import Screen from "./components/Screen";
import AppLoading from "expo-app-loading";
import { useState } from "react/cjs/react.development";
import { useFonts, Cabin_700Bold } from "@expo-google-fonts/cabin";

export default function App() {
  const [transformedData, setTransformedData] = useState([
    { feeling: "Meh", mood: [] },
    { feeling: "Content", mood: [] },
    { feeling: "Happy", mood: [] },
    { feeling: "Frustrated", mood: ["green", "green"] },
  ]);

  let [fontsLoaded] = useFonts({
    Cabin_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
