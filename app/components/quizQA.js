import React from "react";
import { Button, View, Text } from "react-native";
import { styles } from "../styles/quiz";

export default function QuizQA(props) {
  const { showAnswer, question, toggleAnswer } = props;
  const QAData = showAnswer
    ? {
        text: question.answer,
        title: "Back to Question",
        accessibilityLabel: "Back to Question"
      }
    : {
        text: question.question,
        title: "Show Answer",
        accessibilityLabel: "Show Answer"
      };
  return (
    <View style={styles.qaInner}>
      <Text style={styles.QATextStyle}>{QAData.text}</Text>
      <View style={styles.QAToggleStyle}>
        <Button
          onPress={toggleAnswer}
          title={QAData.title}
          color="#666666"
          accessibilityLabel={QAData.accessibilityLabel}
        />
      </View>
    </View>
  );
}
