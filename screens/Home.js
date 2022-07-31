import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "T4kBqoXJRG10XYiltQ0rxWcYTFA22ygD0-v7G7-3CUoLs8Z8qWxdXgK_KojlVlO52oqyfkfm3ThzxVq6BU49iBehkprwkc2GVwq9GtuyWdQrOoD2vwrJF30TPoXdYnYx";

export default function Home() {
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
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
    </SafeAreaView>
  );
}
