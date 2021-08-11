import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onChangeSearchTerm, onSubmitSearchTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyles}
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={onChangeSearchTerm}
        onEndEditing={onSubmitSearchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row"
  },
  inputStyles: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    alignSelf: "center"
  }
});

export default SearchBar;
