import React, { useState, useEffect  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');    // 輸入中的數字
  const [firstNumber, setFirstNumber] = useState({ value: '0' });        // 輸入第一個數字
  const [secondNumber, setSecondNumber] = useState({ value: '0' });      // 輸入第二的數字
  const [operation, setOperation] = useState('');            // 儲存四則運算符號
  
  // 使用者按下按鍵，依據不同按鍵處理
  useEffect(() => {
    if (secondNumber !== '') {
      if (firstNumber !== '' && operation !== '') {
        const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), operation);
        setCurrentNumber(result.toString());
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
      }
    }
  }, [secondNumber, firstNumber, operation]);

  const handlePress = (value) => {
    if ('0123456789.'.includes(value)) {
      if (currentNumber.startsWith("0") && value !== '.') {
        setCurrentNumber(value);
      } else {
        setCurrentNumber(currentNumber + value);
      }
    }
    else if ('+-*/'.includes(value)) {
      if (currentNumber !== '' && operation === '') {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
      }
      else if (currentNumber !== '' && operation !== '') {
        setCurrentNumber(firstNumber);
      }
      setOperation(value);
    }
    else if (value === '=') {
      setSecondNumber(currentNumber);
    }
    else if (value === 'C') {
      setCurrentNumber('0');
      setFirstNumber('');
      setSecondNumber('');
      setOperation('');
    }
  };
  
  // 進行四則運算的函式
  const calculate = (firstNumber, secondNumber, operation) => {
    switch (operation) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      case '/':
        return secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
      default:
        return 'Error';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentValue}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
        <View style={styles.operation}>
          <Text style={styles.resultText}>{operation}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.clearButton]}  onPress={() => handlePress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+/-')}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttons_zero} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>         
          <TouchableOpacity style={styles.button} onPress={() => handlePress('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>    
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  currentValue: {
    flex: 2,
    flexDirection: "row",
  },
  result: {
    flex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
  },
  operation: {
    flex: 2,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 8,
    backgroundColor: "#f0f0f0",
  },
  buttons_zero: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
  },
  buttonText: {
    fontSize: 24,
  },
});

