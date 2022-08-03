import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

const foods = [
  {
    id: 1,
    title: "Shanghai Fried Noodles",
    description: "Wok tossed fried noodles with spicy schezwan sauce 🔥",
    price: "$19.50",
    image:
      "https://www.aheadofthyme.com/wp-content/uploads/2016/01/shanghai-fried-noodles-in-10-minutes-2.jpg",
  },
  {
    id: 2,
    title: "Lemon and Garlic Curry",
    description: "Stew Curry with lemon squeezes and garlic flavor",
    price: "$14.50",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/thai-curry-recipe-1.jpg",
  },
  {
    id: 3,
    title: "Mumbai Pav Bhaji",
    description:
      "Spicy Indian mixed vegetable curry and buns from the streets of Mumbai 🚀",
    price: "$24.90",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
  },
  {
    id: 4,
    title: "Tofu Bao Bun",
    description: "Dim Sums with tofu filling assembled Thai style",
    price: "$12.20",
    image:
      "https://i.pinimg.com/736x/85/96/65/859665cd3fab7580f99ad8952300ef90.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },

  descriptionStyle: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <MenuItem food={food} />
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const MenuItem = (props) => (
  <View style={styles.menuItemStyle}>
    <BouncyCheckbox
      iconStyle={{ borderColor: "lightgrry", borderRadius: 0 }}
      fillColor="green"
    />
    <View style={{ width: 220, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text style={styles.descriptionStyle}>{props.food.description}</Text>
      <Text style={styles.descriptionStyle}>{props.food.price}</Text>
    </View>
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  </View>
);
