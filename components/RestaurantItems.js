import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={"restaurant-" + index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image_url={restaurant.image_url} />
          <RestaurantInfo
            name={restaurant.name}
            rating={restaurant.rating}
            reviews={restaurant.reviews}
            price={restaurant.prices}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image_url,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 15, color: "grey" }}>35-40 · mins</Text>
    </View>
    <View
      style={{
        fontSize: 15,
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
