import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    color: 'black',
  },
});

export default ToDoList;
