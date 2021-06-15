import logo from './logo.svg';
import './App.css';
import UseEffect from './components/UseEffect';
import Multiple from './components/conditional rendering/Multiple';
import ShowHide from './components/conditional rendering/ShowHide';
import ControlledInputs from './components/forms/ControlledInputs';
import MultipleInputs from './components/forms/MultipleInputs';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import PropDrilling from './components/PropDrilling';
import CustomHooks from './components/CustomHooks';
import index from './components/router/Index';
import Index from './components/router/Index';

function App() {
  return (
    <div className="App">
      <div className="container-useeffect">
         {/* <UseEffect></UseEffect> */}
         {/* <Multiple></Multiple> */}
         {/* <ShowHide></ShowHide> */}
         {/* <ControlledInputs></ControlledInputs> */}
         {/* <MultipleInputs></MultipleInputs> */}
         {/* <UseRef></UseRef> */}
         {/* <UseReducer></UseReducer> */}
             {/* <PropDrilling></PropDrilling> */}
             {/* <CustomHooks></CustomHooks> */}
            <Index></Index>


      </div>
    </div>
  );
}

export default App;
