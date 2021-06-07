import TodoList from './component/todoList/TodoList'



//函数组件
/* 
function App (){
    return (
         <p>hello</p>
    )
}

export default App */

import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                 <TodoList/>
                 <p>hello11</p>
            </div>
           
        )
    }
}

export default App