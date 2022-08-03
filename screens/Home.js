import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "T4kBqoXJRG10XYiltQ0rxWcYTFA22ygD0-v7G7-3CUoLs8Z8qWxdXgK_KojlVlO52oqyfkfm3ThzxVq6BU49iBehkprwkc2GVwq9GtuyWdQrOoD2vwrJF30TPoXdYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
