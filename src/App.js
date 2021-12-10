import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import LoginScreen from "./components/LoginScreen";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <header>
        <Tabs
          tabs={["Login", "Registration", "Connect", "Start"]}
          colorUnselected="gray"
        ></Tabs>
      </header>
      <main>
        <div>
          <LoginScreen></LoginScreen>
        </div>
      </main>
    </div>
  );
}

export default App;
