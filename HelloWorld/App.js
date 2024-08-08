import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

const logo = require("./assets/dog.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box01}>
        <ScrollView>
          <Text style={{ color: "white", fontSize: 18, padding: 50 }}>
            「昔日的孟加拉國父之女，如今卻在示威抗爭中逃亡...」孟加拉在7月爆發的反政府抗爭持續延燒，衝突中喪生的人數已超過280人，死者多為參加示威的學生、也有一部份是警察。政府對於「殺害學生」交代不清，加上執政以來對付反對派的高壓手段，讓示威者更加怒不可遏。8月5日大批抗爭民眾攻入總理官邸，孟加拉國父之女——現任總理哈希娜（Sheikh
            Hasina）——宣布辭職、隨後出逃前往印度，15年的執政生涯就此宣告結束。目前孟加拉將由現任總統沙哈布丁（Mohammed
            Shahabuddin）與軍方組成臨時政府，預計會在局勢穩定後重新選舉。
            孟加拉反政府示威從今年7月爆發，至今造成至少280人死亡、超過1萬1,000人被捕；抗爭起因於反對孟加拉政府的職缺配額制度，這項制度留給特定族群擔任政府職位的保留名額，其中受惠最多的是給1971年孟加拉獨立戰爭的軍人後代子女，也因此被認為是差別待遇的制度。
            抗爭爆發後延燒數週，儘管總理哈希娜一度提出了退讓的方案，縮減優待的配額，但抗爭者要求的是「全面取消」職缺配額制度，不讓既得利益者繼續享受特權資源。另一方面，示威期間發生有學生被軍警鎮壓時致死的案件，政府對此交代不清，哈希娜還表示這是「壓制暴亂份子的必要手段」，更加激化抗爭者的憤怒情緒。
          </Text>
        </ScrollView>
      </View>
      <View style={styles.box02}>
        <Text>B</Text>
        <Button
          title="Submit"
          onPress={() => console.log("你有按下按鍵")}
          color="plum"
        ></Button>
      </View>
      <View style={styles.box03}>
        <Text>C</Text>
        <Image
          source={{
            uri: "https://imgur.com/3ojw78t.png",
            method: "POST",
            headers: {
              Pragma: "no-cache",
            },
            body: "Your Body goes here",
          }}
          style={{ width: 350, height: 250 }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 36,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box01: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center", 
  },
  box02: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  box03: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
