import styled from "styled-components"
import TodoContainer from "../components/TodoContainer"
import TodoCard from "../components/TodoCard"
import TodoInput from "../components/TodoInput"
import { useRef, useState } from "react"


const Workspace = () =>{ 

  const todoInput = useRef()
  const [todos, setTodos] = useState([])

  const createTodo = () => {
    setTodos(
      [...todos, 
      {
        id: todos.length + 1,
        description: todoInput.current.value,
        date: new Date().getDate() + "-" + (parseInt(new Date().getMonth()) +1),
        status: "todo"
      }
  ]
  )
    todoInput.current.value = ""
  }

  const listenEnter = (e) => e.key === "Enter" && createTodo()

  const changeStatus = (id, status) => {
    let copy = [...todos]
    let index = copy.findIndex(e => e.id === id)
    
    if (status === "todo"){
      copy[index].status = "inprogress"
    }
    
    if (status === "inprogress"){
      copy[index].status = "completed"
    }

    if (status === "completed"){
      copy[index].status = "inprogress"
    }

    setTodos(copy)
  } 

    return(
      <Wrapper>

          <TodoContainer title="Todo">
          {
            todos.filter(e => e.status ==="todo").map(todo =>
            <TodoCard 
              key={todo.id} 
              description={todo.description} 
              date={todo.Date}
              doubleClicked={() => changeStatus(todo.id, todo.status)}  
              status={todo.status}
            />
            )
          }

          <TodoInput ref={todoInput} onKeyPress={listenEnter}/>
        </TodoContainer>

        <TodoContainer title="In Progress">
        {
          todos.filter(e => e.status ==="inprogress").map(todo =>
            <TodoCard 
            key={todo.id} 
            description={todo.description} 
            date={todo.Date}
            doubleClicked={() => changeStatus(todo.id, todo.status)}
            status={todo.status}
            />
          )
        }
        </TodoContainer>  

        <TodoContainer title="Completed">
        {
          todos.filter(e => e.status ==="completed").map(todo=>
            <TodoCard 
            key={todo.id} 
            description={todo.description} 
            date={todo.Date}
            doubleClicked={() => changeStatus(todo.id, todo.status)}
            status={todo.status}
            />
          )
        }
        </TodoContainer>  
      </Wrapper>
    )
}
 
export default Workspace;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
  gap: 30px;
`