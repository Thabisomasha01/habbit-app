import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper'

export default function AuthScreen() {

    const [isSignUp, setIsSignUp] = useState<boolean>(false)
    
    const hangleSwitchMode = () => {
        setIsSignUp((prev) => !prev)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS ==="ios" ?  "padding" : "height"} 
        style={styles.Container}
        >
            <View style={styles.content}>
                <Text variant="headlineMedium" style={styles.title}>
                    {isSignUp ? "Create Account" : "Welcome Back"}
                </Text>

                <TextInput 
                    label="Email" 
                    autoCapitalize="none" 
                    keyboardType="email-address" 
                    placeholder="example@gmail.com"
                    mode="outlined"
                    style={styles.input}
                />

                 <TextInput 
                    label="Password" 
                    autoCapitalize="none" 
                    keyboardType="email-address" 
                    mode="outlined"
                    style={styles.input}
                />

                <Button mode="contained" style={styles.button}>{isSignUp ? "Sign Up" : "Sing In"}</Button>
                <Button 
                    mode="text"
                    onPress={hangleSwitchMode}
                    style={styles.switchModeButton}
                >
                    {isSignUp ? "Do you already have an account? Sign In" : "Dont have an account? Sign Up"}
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
    
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
     content: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
     title: {
        textAlign: "center",
        marginBottom: 24,
    },
     input: {
        marginBottom: 16,
    },
     button: {
        marginTop: 10,
    },
    switchModeButton: {
        marginTop: 16
    }
})