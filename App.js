import React, { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "Buy Coffee", key: "1" },
        { text: "Create App", key: "2" },
        { text: "Play Switch", key: "3" }
    ]);

    const pressHandler = key => {
        setTodos(prevProps => {
            return prevProps.filter(todo => todo.key != key);
        });
    };

    const submitHandler = txt => {
        if (txt.length > 3) {
            setTodos(prevTodos => {
                return [
                    { text: txt, key: String(prevTodos.length + 1) },
                    ...prevTodos
                ];
            });
        } else {
            Alert.alert("Oops!", "Todos Must be three over 3 chars.", [
                { text: "Understood" }
            ]);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    key={item.key}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        padding: 40,
        backgroundColor: "pink",
        flex: 1
    },
    list: {
        flex: 1,
        marginTop: 20
    }
});
