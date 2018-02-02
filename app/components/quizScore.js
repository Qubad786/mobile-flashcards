import React from "react";
import { Button, View, Text } from "react-native";
import { styles } from "../styles/quiz";
import { clearLocalNotification } from '../utils/notifications';

export default class QuizScore extends React.Component {

  componentDidMount () {
    // This only mounts once a quiz ends.
    clearLocalNotification();
  }

  render () {
    const { backToDeck, score, restartQuiz } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <View style={styles.button}>
            <Button
              onPress={restartQuiz}
              title="Restart Quiz"
              color="#4267b2"
              accessibilityLabel="Restart Quiz"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={backToDeck}
              title="Back to Deck"
              color="#b71845"
              accessibilityLabel="Back to Deck"
            />
          </View>
        </View>
      </View>
    );
  }
}
