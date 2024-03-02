import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
