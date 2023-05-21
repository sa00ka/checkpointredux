import { createSlice } from '@reduxjs/toolkit'
import { todoList } from '../todoList'

const initialState = {
  todoList,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action)=>{
        state.todoList = [action.payload, ...state.todoList]
    },
    editTask: (state,action)=>{
        const taskTarget= state.todoList.findIndex(el => el.id == action.payload.id);
        state.todoList[taskTarget]= action.payload.todo;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, editTask } = todoSlice.actions

export default todoSlice.reducer