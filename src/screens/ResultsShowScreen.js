import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [results, setResults] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250
  }
});

export default ResultsShowScreen;
