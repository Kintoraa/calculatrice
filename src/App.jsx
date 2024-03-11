import "./App.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { Background } from "./components/BackGroundComponent.jsx";
import { CalculatorApp } from "./components/KeyboardComponent.jsx";

function App() {
  return (
    <ThemeProvider>
      <Background>
        <CalculatorApp></CalculatorApp>
      </Background>
    </ThemeProvider>
  );
}

export default App;
