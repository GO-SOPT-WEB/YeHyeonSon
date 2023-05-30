import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
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
