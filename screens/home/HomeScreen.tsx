import { Product } from "data/model/Product";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { GetProductsUseCaseImpl } from "data/usecases/GetProductsUseCaseImpl";
import ItemProduct from "components/ItemProduct";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const useCase = new GetProductsUseCaseImpl();
    const response = await useCase.execute(offset, limit);

    if (response.length == 0) {
      setHasMore(false);
    } else {
      setProducts([...products, ...response]);
      setHasMore(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [offset, limit]);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Store App</Text>
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ItemProduct
              product={item}
              onEditPress={() => console.log("Edit pressed")}
              onDetailPress={() => console.log("Detail pressed")}
              onDeletePress={() => console.log("Delete pressed")}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#000" /> : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  safearea:{
    flex: 1, backgroundColor: "#fff"
  },

  toolbar: {
    backgroundColor: "#fff", // blue color
    paddingTop: 36,
    paddingBottom: 16,
    paddingStart: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default HomeScreen;
