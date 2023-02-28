import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          paddingTop: "20%",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        HOME SCREEN
      </Text>

      <View
        style={{
          padding: 10,
          backgroundColor: "black",
          borderRadius: 6,
          marginTop: "10%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}></Text>
          <Text style={{ color: "white", flex: 1 }}>Enter Quiz Topic:</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              borderRadius: 6,
              flex: 2,
            }}
          ></TextInput>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 6,
          marginTop: 15,
          alignItems: "center",
          onPress: () => console.warn("Submit Topic"),
        }}
      >
        <Text style={{ color: "white" }}>Submit Topic</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
