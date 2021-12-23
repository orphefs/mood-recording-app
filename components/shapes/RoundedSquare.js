import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function RoundedSquare({ value }) {
  return (
    <View style={styles.square}>
      <AppText style={styles.text}>{value}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 30,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.white,
  },
});

export default RoundedSquare;
