import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');    // 輸入中的數字
  const [firstNumber, setFirstNumber] = useState('');  // 輸入四則運算後的數字
  const [secondNumber, setSecondNumber] = useState('');  // 輸入四則運算後的數字
  const [operation, setOperation] = useState('');            // 儲存四則運算
  
  const handlePress = (value) => {
    if ('0123456789.'.includes(value)) {
      if (currentNumber.startsWith("0") && value != ''){
        setCurrentNumber(value);
      }else{
        if (operation !== ''){
          setCurrentNumber(firstNumber + operation + value);
          setSecondNumber(secondNumber + value);
        }
        setCurrentNumber(currentNumber + value);        // 輸入數字
      }
      
    }
    else if ('+-*/'.includes(value)) {                // 如果使用者選擇四則運算，將螢幕上的數字儲存
      if (currentNumber !== '' && operation === '') {
        setFirstNumber(currentNumber);        
        setOperation(value);
        setCurrentNumber(currentNumber + value);
      }
      else if (currentNumber !== '' && operation !== '') {     
        setOperation(value);
        setCurrentNumber(firstNumber + value);
      }
    }
    else if (value === '=') {                         // 進行計算
      if (firstNumber !== '' && secondNumber !== '' && operation !== '') {
        const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber), operation);
        setCurrentNumber(result.toString());          // 將結果顯示在螢幕上
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
      }
    }
    else if (value === 'C') {                         // 清除按鍵
      setCurrentNumber('0');
      setFirstNumber('');
      setSecondNumber('');
      setOperation('');
    }
  };
  
  // 四則運算的函式
  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error';
      default:
        return 'Error';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
      <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={() => handlePress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+/-</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </View>
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
  result: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
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

