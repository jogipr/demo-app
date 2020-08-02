import React,{useReducer} from 'react';
import SimpleTabs from './components/AppNavigation';
import { initialState,matchesReducer } from "./redux/matchesReducer"
import "./App.css"

const  App=()=> {
 
  const [state,dispatch]  = useReducer(matchesReducer,initialState)
  const handleSubmitMatch=(match)=>{
    dispatch({
      type:"SET_MATCH",
      value:match
    })
  }

  return (
    <div className="App">
      <SimpleTabs
        matches={state}
        submitMatch={handleSubmitMatch}
      />
    </div>
  );
}

export default App;
