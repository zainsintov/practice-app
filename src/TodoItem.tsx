import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TodoItemTypes {
  id: number;
  title: string;
}

export const TodoItem: FC<TodoItemTypes> = ({id, title}) => {
  return (
    <View key={id}>
      <Text style={styles.marginTodos}>
        {id} {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTodos: {
    margin: 10,
  },
});
