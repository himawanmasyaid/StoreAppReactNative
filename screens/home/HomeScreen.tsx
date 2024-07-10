import { Product } from 'data/model/Product';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';


interface HomeScreenProps {
    navigation: any;
  }

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const [products, setProducts] = useState<Product[]>([]);


    return(
        <View>

        </View>
    )

};

export default HomeScreen;