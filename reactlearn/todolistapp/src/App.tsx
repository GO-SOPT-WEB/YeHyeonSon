import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import {useState, useRef} from "react";

const mockTodo = [
  {id:0,
  isDone: false,
  content: "리액트 공부하기",
  createDate: new Date().getTime(),
  },
  {id:1,
  isDone: false,
  content: "빨래 널기",
  createDate: new Date().getTime(),
  },
  {id:2,
  isDone: false,
  content: "노래 연습하기",
  createDate: new Date().getTime(),
  },
]

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content: string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <TodoEditor/>
        <TodoList/>
        <TodoItem/>
      </ThemeProvider>
    </div>
  );
}

export default App;
