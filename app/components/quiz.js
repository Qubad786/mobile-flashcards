import React from "react";
import { View, Button, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import { styles } from "../styles/quiz";
import QuizScore from "./quizScore";
import QuizQA from "./quizQA";

export default class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    score: 0,
    showAnswer: false
  };

  onCorrect = () => {
    this.setState(state => ({
      currentQuestion: state.currentQuestion + 1,
      score: state.score + 1,
      showAnswer: false
    }));
  };

  onIncorrect = () => {
    this.setState(state => ({
      currentQuestion: state.currentQuestion + 1,
      showAnswer: false
    }));
  };

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      showAnswer: false
    });
  };

  backToDeck = () => {
    this.props.navigation.goBack();
  };

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }));
  };



  render() {
    const { currentQuestion, score, showAnswer } = this.state;
    const { questions } = this.props.navigation.state.params;
    const isQuestionsAvailable = currentQuestion < questions.length;

    return (
      <View style={styles.container}>
        {isQuestionsAvailable ? (
          <View style={styles.container}>
            <View style={styles.inner}>
              <Text style={styles.scoreText}>
                {`${currentQuestion+1} / ${questions.length}`}
              </Text>
            </View>

            <QuizQA
              question={questions[currentQuestion]}
              toggleAnswer={this.toggleAnswer}
              showAnswer={showAnswer}
            />

            <View style={styles.btnGroup}>
              <View style={styles.button}>
                <Button
                  onPress={this.onCorrect}
                  title="Correct"
                  color="#41c091"
                  accessibilityLabel="Correct"
                />
              </View>

              <View style={styles.button}>
                <Button
                  onPress={this.onIncorrect}
                  title="Incorrect"
                  color="#b71845"
                  accessibilityLabel="Incorrect"
                />
              </View>
            </View>
          </View>
        ) : (
          <QuizScore
            score={`${score} / ${questions.length}`}
            restartQuiz={this.restartQuiz}
            backToDeck={this.backToDeck}
          />
        )}
      </View>
    );
  }
}
