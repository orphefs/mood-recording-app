import React from "react";
import AppText from "./AppText";
import Icon from "./Icon";
import { TouchableOpacity, StyleSheet, View } from "react-native";

function PickerItem({ label, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <View style={styles.container}> */}
      {icon && (
        <Icon
          name={icon.name}
          size={65}
          backgroundColor={icon.backgroundColor}
        />
      )}
      <AppText style={styles.text}>{label}</AppText>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  text: {
    padding: 20,
    fontSize: 15,
  },
});

export default PickerItem;
