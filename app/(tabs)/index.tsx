import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.View}></View>
  );
}


const styles = StyleSheet.create ({
  View: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
})
