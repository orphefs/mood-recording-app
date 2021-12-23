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
    width: 60,
    height: 40,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    color: colors.black,
  },
});

export default RoundedSquare;
