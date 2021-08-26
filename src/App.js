import React, { Component } from "react";
/*
import FirstComponent, {
  SecondComponent,
} from "./components/learning-examples/FirstComponent";
*/
// import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";
import "./App.css";
import "./bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="TodoApp">
        {/*<Counter />*/}
        <TodoApp />
      </div>
    );
  }
}

/*
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

function ThirdComponent() {
  return <div className="thirdComponent">ThirdComponent</div>;
}
*/
export default App;
