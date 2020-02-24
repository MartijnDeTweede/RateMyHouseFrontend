import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UserContainer from '../containers/UserContainer';

const App = () => (
  <div>
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer /> */}
    <UserContainer />
  </div>
)
export default App