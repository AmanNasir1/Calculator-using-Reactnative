import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Row from "./Components/Row";

const Main = () => {
  const [displayValue, setDisplayValue] = useState<String>("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState<String>("");
  const handleValue = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value.toString());
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleOperatorInput = (op) => {
    setOperator(op);
    setPrevValue(displayValue);
    setDisplayValue("0");
  };

  const handleClear = () => {
    setPrevValue("0");
    setDisplayValue("0");
    setOperator(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayResult}>
        <Text>{displayValue}</Text>
      </View>
      <View style={styles.buttons}>
        <Row>
          <Button title="AC" onPress={handleClear} />
          <Button title="+/-" />
          <Button title="%" onPress={() => handleOperatorInput("%")} />
          <Button title="/" onPress={() => handleOperatorInput("/")} />
        </Row>
        <Row>
          <Button title="7" onPress={() => handleValue(7)} />
          <Button title="8" onPress={() => handleValue(8)} />
          <Button title="9" onPress={() => handleValue(9)} />
          <Button title="X" onPress={() => handleOperatorInput("*")} />
        </Row>
        <Row>
          <Button title="4" onPress={() => handleValue(4)} />
          <Button title="5" onPress={() => handleValue(5)} />
          <Button title="6" onPress={() => handleValue(6)} />
          <Button title="-" onPress={() => handleOperatorInput("-")} />
        </Row>
        <Row>
          <Button title="1" onPress={() => handleValue(1)} />
          <Button title="2" onPress={() => handleValue(2)} />
          <Button title="3" onPress={() => handleValue(3)} />
          <Button title="+" onPress={() => handleOperatorInput("+")} />
        </Row>
        <Row>
          <Button title="0" onPress={() => handleValue(0)} />
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
    justifyContent: "flex-end"
  },
  displayResult: {},
  buttons: {}
});
