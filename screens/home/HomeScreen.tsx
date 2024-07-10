import { Product } from "data/model/Product";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { GetProductsUseCaseImpl } from "data/usecases/GetProductsUseCaseImpl";

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
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default HomeScreen;
