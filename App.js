import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import DataEntry from "./screens/DataEntry";
import FeelingsVisualization from "./screens/FeelingsVisualization";
import Screen from "./components/Screen";
import AppLoading from "expo-app-loading";
import { useState } from "react/cjs/react.development";
import { useFonts, Cabin_700Bold } from "@expo-google-fonts/cabin";
import feelings from "./config/feelings";

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
    // alignItems: "center",
    justifyContent: "center",
  },
});
