import "./App.css";
import LoginScreen from "./components/LoginScreen";
import Tabs from "./components/Tabs";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <h1>Testing app</h1>
        <Tabs tabs={["Login", "Button component", "Input component"]}>
          <div>
            {" "}
            <LoginScreen></LoginScreen>
          </div>
          <div>
            {" "}
            <Button
              label="Button test"
              onClick={() => alert("You have clicked button")}
            ></Button>{" "}
            <Button
              label="Button disabled"
              disabled
              onClick={() => alert("You have clicked disabled button")}
            ></Button>{" "}
            <Button
              label="Button custom"
              textColor="black"
              maxWidth="500px"
              background="white"
              onClick={() => alert("You have clicked custom button")}
            ></Button>{" "}
          </div>
          <div className="inputApp">
            <h5>Input password</h5>
            <Input
              height="25px"
              type="password"
              placeholder="password"
              textColor="purple"
            ></Input>{" "}
            <h5>Input email</h5>
            <Input height="25px" type="email" placeholder="email"></Input>{" "}
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
