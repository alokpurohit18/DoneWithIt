import React from "react";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";

const items = [
  {
    key: 0,
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    key: 1,
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pickup",
  },
  {
    key: 2,
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    key: 3,
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    key: 4,
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    key: 5,
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    key: 6,
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function SearchBar() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
