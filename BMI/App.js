import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculate_bmi = () => {
    if (weight && height) {
      const bmiValue = (
        parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)
      ).toFixed(2);
      setBmi(bmiValue);
      
      let message = "";
      if (bmiValue < 18.5) {
        message = "體重過輕";
      } else if (bmiValue < 24) {
        message = "正常體重";
      } else if (bmiValue < 27) {
        message = "過重";
      } else {
        message = "肥胖";
      }
      
      Alert.alert("BMI 檢測結果", `您的 BMI 為 ${bmiValue}，屬於${message}範圍。`);
    } else {
      Alert.alert("錯誤", "請輸入身高和體重");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BMI計算機</Text>
      </View>
      <View style={styles.input_area}>
        <Text style={styles.label}>身高 (cm)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
          placeholder="請輸入身高"
        />
        <Text style={styles.label}>體重 (kg)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          placeholder="請輸入體重"
        />
        <Button title="計算 BMI" onPress={calculate_bmi} color="green" />
        <Text style={styles.result}>
          BMI：{bmi}
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#156082",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 50,
  },
  title: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  input_area: {
    // flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 24,
    marginTop: 30,
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  result: {
    fontSize: 36,
    marginTop: 20,
  },
});
