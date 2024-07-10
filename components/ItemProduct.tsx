import { Product } from "data/model/Product";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  product: Product;
  onEditPress: () => void;
  onDetailPress: () => void;
  onDeletePress: () => void;
}

const ItemProduct = ({
  product,
  onEditPress,
  onDetailPress,
  onDeletePress,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{product.category.name}</Text>
        <Image
          source={{ uri: product.category.image }}
          style={styles.categoryImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDetailPress} style={styles.detailButton}>
          <Text style={styles.buttonText}>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeletePress} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#999",
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  categoryImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  detailButton: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ItemProduct;
