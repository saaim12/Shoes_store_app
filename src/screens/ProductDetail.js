import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import BackIcon from "../Assets/SVG/BackIcon";
import { LinearGradient } from "expo-linear-gradient";

import FavoriteIcon from "../Assets/SVG/HeartIcon";

const ProductDetail = ({ route, navigation }) => {
  const { data } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);

  const handlePress = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#ff6a00", "#ee0979"]}
        style={styles.imageTab}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favouritebutton}
            onPress={handlePress}
          >
            <FavoriteIcon isFavorited={isFavorited} />
          </TouchableOpacity>
        </View>
        <Image source={data.thumbnail} style={styles.image} />
      </LinearGradient>
      <View style={styles.productInfo}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{data.rating}</Text>
        </View>
        <Text style={styles.price}>${data.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageTab: {
    height: "50%",
    width: "100%",
    backgroundColor: "black",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 16,
    paddingTop: 16,
    width: "100%",
    zIndex: 1,
    marginTop: 15,
  },
  backbutton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  favouritebutton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  productInfo: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
    color: "#ffcc00",
    marginRight: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2ecc71",
  },
});

export default ProductDetail;
