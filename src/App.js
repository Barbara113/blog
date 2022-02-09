import "./App.css";
import LoginScreen from "./components/LoginScreen";
import Tabs from "./components/Tabs";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
// import Menu from "./components/Menu";
// import PopUpMenu from "./components/Menu";
// import Container from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <h1>Testing app</h1>
        <Tabs
          tabs={[
            "Login",
            "Button component",
            "Input component",
            "Select",
            "Checkbox",
          ]}
        >
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
          <div className="selectApp">
            <h5>Select</h5>
            <Select
              title="Choose your option"
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
                "Option 6",
                "Option 7",
                "Option 8",
                "Option 9",
                "Option 10",
              ]}
              onClick={(value) => console.log("value", value)}
            ></Select>
          </div>
          <div className="checkboxApp">
            <h5>Checkbox</h5>
            <Checkbox
              label="This is label"
              positionLabel="down"
              value="Ovo je value"
            ></Checkbox>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
