import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTodos} from './useTodos';
import {TodoItem} from './TodoItem';
import {InputTextWithLabel} from './InputTextWithLabel';

interface ItemTypes {
  completed: boolean;
  id: number;
  title: string;
  useId: number;
}

/**
 * SINGLE RESPONSIBILITY PRINCIPLE
 * This is the todos page component and it's sole purpose of is to
 * display the data, all the functions are implemented separately from this page
 */

function App(): JSX.Element {
  const {todos} = useTodos();

  return (
    <>
      <InputTextWithLabel label="Enter details of your task" />
      <ScrollView>
        <View style={styles.justifyCenter}>
          {todos.map((item: ItemTypes, key) => {
            /*
             * INTERFACE SEGREGATION PRINCIPLE
             * insted of passing the whole object only title and id is being passed
             * to the TodoItem and separate types are created inside TodoItem
             */
            return <TodoItem key={key} id={item.id} title={item.title} />;
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  justifyCenter: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default App;
