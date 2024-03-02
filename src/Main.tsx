import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Row from "./Components/Row";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.displayResult}>
        <Text>This is for display result</Text>
      </View>
      <View style={styles.buttons}>
        <Row>
          <Button title="AC" />
          <Button title="+/-" />
          <Button title="%" />
          <Button title="/" />
        </Row>
        <Row>
          <Button title="7" />
          <Button title="8" />
          <Button title="9" />
          <Button title="X" />
        </Row>
        <Row>
          <Button title="4" />
          <Button title="5" />
          <Button title="6" />
          <Button title="-" />
        </Row>
        <Row>
          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
          <Button title="+" />
        </Row>
        <Row>
          <Button title="0" />
          <Button title="." />
          <Button title="=" />
        </Row>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "flex-end",
  },
  displayResult: {},
  buttons: {},
});
