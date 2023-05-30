import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <div>Todo Editor</div>
        <div>Todo List</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
