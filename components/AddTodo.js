import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("");

    const changeHandler = val => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                placeholder="New Todo..."
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button
                onPress={() => {
                    submitHandler(text);
                }}
                title="Add Todo"
                color="coral"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
});