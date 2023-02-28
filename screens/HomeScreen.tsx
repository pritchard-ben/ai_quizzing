import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";
import "react-native-url-polyfill/auto";
import React from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import QuizScreen from "./QuizScreen";

// import { OPENAI_API_KEY } from "@env";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [topic, setTopic] = React.useState("");
  const [questions, setQuestions] = React.useState("");

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          paddingTop: "20%",
        }}
      >
        Enter Topic
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
            onChangeText={(topic) => setTopic(topic)}
            value={topic}
            placeholder="Topic"
            style={{
              backgroundColor: "white",
              borderRadius: 6,
              flex: 2,
              padding: 10,
            }}
          ></TextInput>
        </View>
      </View>
      <Pressable
        onPress={() => handleGetQuestions(topic)}
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 6,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Submit Topic</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Quiz" as never)}
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 6,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Start Quiz</Text>
      </Pressable>
    </SafeAreaView>
  );
  async function handleGetQuestions(topic) {
    try {
      // const { Configuration, OpenAIApi } = require("openai-api");

      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        organization: process.env.OPENAI_ORG,
      });
      const promptString =
        'Write 10 multiple-choice quiz questions about the topic "' +
        topic +
        '", giving your answer in JSON format with two incorrect answers and one correct";
      const openai = new OpenAIApi(configuration);
      const headers = {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      };
      // console.log(process.env.OPENAI_API_KEY);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptString as string,
        max_tokens: 500,
        temperature: 0.2,
      });

      // console.log(response.data.choices);

      setQuestions(response.data.choices as unknown as string);
      console.log(questions);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
};

export default HomeScreen;

const styles = StyleSheet.create({});

// async function handleGetQuestions(topic) {
//   const config = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const promptString =
//     "Write 10 multiple-choice questions in JSON format on the topic " + topic;

//   try {
//     const openai = new OpenAIApi(config);
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: promptString as string,
//       max_tokens: 7,
//       temperature: 0,
//     });
//     console.log(response);
//     setQuestions(response.data.choices);
//     console.log(questions);
//   } catch (error) {
//     console.log(error);
//   }
// }
