import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResults = (price) => {
    //price = $ | $$ | $$$
    return results.filter((result) => result.price === price);
  };

  //<View style={{flex:1}}> other alternative
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={setSearchTerm}
        onSubmitSearchTerm={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResults("$")} />
        <ResultsList title="Bit Pricer" results={filterResults("$$")} />
        <ResultsList title="Big Spender" results={filterResults("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
