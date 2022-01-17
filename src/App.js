import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import LoginScreen from "./components/LoginScreen";
import Tabs from "./components/Tabs";
import Datepicker from "./components/Datepicker";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div>
          <Datepicker></Datepicker>
        </div>
      </main>
    </div>
  );
}

export default App;
