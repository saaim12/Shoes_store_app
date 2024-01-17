import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuIcon from "../Assets/SVG/MenuIcon";

import OptionIcon from "../Assets/SVG/OptionIcon";
import { FlatList } from "react-native-gesture-handler";
import { productData } from "../Data/ProductData";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";

const Home = ({ navigation }) => {
  const data = productData;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Animated.View
            entering={FadeInRight.delay(1000).duration(400)}
            exiting={FadeInLeft.delay(1000).duration(400)}
          >
            <MenuIcon />
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.delay(1000).duration(400)}
            exiting={FadeInRight.delay(1000).duration(400)}
          >
            <OptionIcon />
          </Animated.View>
        </View>
        <View style={styles.bodycontent}>
          <View>
            <Text style={styles.title}>Premium Shoes</Text>
          </View>
          <View>
            <Text style={styles.title2}>Product of your choice</Text>
          </View>
        </View>
        <View style={styles.productlist}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={data}
            renderItem={({ item }) => (
              <Animated.View
                style={styles.itemContainer}
                entering={FadeInUp.delay(1000)
                  .duration(400)
                  .damping(10)
                  .springify()}
                exiting={FadeInDown.delay(1000)
                  .duration(400)
                  .damping(10)
                  .springify()}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("ProductDetail", { data: item });
                  }}
                >
                  <Image source={item.thumbnail} style={styles.thumbnail} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.title3}>{item.title}</Text>

                    <View style={styles.footer}>
                      <Text style={styles.price}>
                        <Text style={styles.currency}>$</Text> {item.price}
                      </Text>
                      <Text style={styles.rating}>{item.rating} stars</Text>
                    </View>
                  </View>
                </Pressable>
              </Animated.View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 10,
  },
  header: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  title2: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  bodycontent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal:10
  },
  list: {
    paddingHorizontal: 10,
    width: "100%",
  },

  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 280,
    flexDirection: "column",
    width: "45%",
    borderRadius: 8,
    marginBottom: 16,
  },
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  title3: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  currency: {
    color: "blue",
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 10,
  },
  price: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 10,
  },
  itemInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
