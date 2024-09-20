import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalculatorButton from "./components/CalculatorButton";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isResultShown, setIsResultShown] = useState(false);

  // Prevent adding multiple consecutive operators or decimals
  const isValidInput = (value) => {
    // Prevent consecutive operators
    const lastChar = input.slice(-1);
    if (
      ["+", "-", "*", "/"].includes(lastChar) &&
      ["+", "-", "*", "/"].includes(value)
    ) {
      return false;
    }
    // // Prevent multiple decimals
    if (value === ".") {
      const parts = input.split(/[+\-*/]/); // Split by operators
      const lastPart = parts[parts.length - 1]; // Get the last operand
      if (lastPart.includes(".")) {
        return false; // Already has a decimal point in this operand
      }
    }
    return true;
  };

  const calculateResult = () => {
    try {
      const evalResult = evaluateExpression(input);
      const formattedResult = parseFloat(evalResult.toPrecision(9));
      setResult(formattedResult.toString());
      setIsResultShown(true);
    } catch (error) {
      setResult("Error");
    }
  };

  // Custom evaluation logic instead of eval()
  // Simple algorithm to parse and calculate expressions
  const evaluateExpression = (expression) => {
    const operators = [];
    const operands = [];
    let currNumber = "";

    for (let char of expression) {
      if ("+-*/".includes(char)) {
        // negative number
        if (currNumber === "" && char === "-") {
          currNumber = "-";
        } else {
          operands.push(parseFloat(currNumber));
          operators.push(char);
          currNumber = ""; // Reset current number after an operator
        }
      } else {
        currNumber += char;
      }
    }
    operands.push(parseFloat(currNumber)); // Push the last number

    // Handle multiplication and division first
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*" || operators[i] === "/") {
        const result = performOperation(
          operands[i],
          operands[i + 1],
          operators[i]
        );
        operands.splice(i, 2, result); // Replace the two operands with the result
        operators.splice(i, 1); // Remove the operator
        i--; // Step back to account for the removed element
      }
    }

    // Handle addition and subtraction after
    while (operators.length) {
      const result = performOperation(operands[0], operands[1], operators[0]);
      operands.splice(0, 2, result); // Replace the two operands with the result
      operators.splice(0, 1); // Remove the operator
    }

    return operands[0]; // Final result is in operands[0]
  };

  const performOperation = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Error" : a / b; // Handle division by zero
      default:
        return 0;
    }
  };
  // Function to handle button press
  const handlePress = (value) => {
    // If result is shown and a number is pressed, clear input and start new calculation
    if (isResultShown && !isNaN(value)) {
      setInput(value);
      setResult("");
      setIsResultShown(false);
    } else if (value === "C") {
      // If 'C' is pressed, clear both input and result
      setInput("");
      setResult("");
      setIsResultShown(false);
    } else if (value === "=") {
      calculateResult();
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else {
      if (isValidInput(value)) {
        setInput(input + value); // append input values to the expression
      }
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Display the result or current input */}
        <Text style={styles.resultText}>{result || input || " "}</Text>
        {/* Calculator button view */}
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <CalculatorButton value="C" onPress={handlePress} flexValue={1} />
            <CalculatorButton value="←" onPress={handlePress} flexValue={1} />
            <View style={styles.blankButton} />
            <CalculatorButton value="/" onPress={handlePress} flexValue={1} />
          </View>
          {[
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
          ].map((row, index) => (
            <View key={index} style={styles.row}>
              {row.map((value) => (
                <CalculatorButton
                  key={value}
                  value={value}
                  onPress={handlePress}
                  flexValue={1}
                />
              ))}
            </View>
          ))}
          <View style={styles.row}>
            <CalculatorButton value="0" onPress={handlePress} flexValue={2.1} />
            <CalculatorButton value="." onPress={handlePress} flexValue={1} />
            <CalculatorButton value="=" onPress={handlePress} flexValue={1} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  resultText: {
    fontSize: 48,
    color: "#333",
    textAlign: "right",
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10, // Adds space between rows
  },
  blankButton: {
    flex: 1.1, // Make the blank button take up space
  },
});
