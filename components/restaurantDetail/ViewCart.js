import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ViewCart(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 80,
        zIndex: 999,
        shadowOffset: { width: -2, height: 6 },
        shadowColor: "#413F42",
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
