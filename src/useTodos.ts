import axios from 'axios';
import {useEffect, useState} from 'react';

/**
 * DEPENDENCY INVERSION PRINCIPLE
 *
 * Implementation of getting the data and calling the api is separate
 * we can change this implementation from axios to something else without affecting the rest of the code
 */
export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/',
      );

      if (response.status === 200) {
        setTodos(response.data);
      }
    }
    getEvents();
  }, []);

  return {todos};
};
