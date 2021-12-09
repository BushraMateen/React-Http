

 import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/ConterOne';
import DataFetching from './Components/DataFetching';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import HookCounterOne from './Components/HookCounterone';
import HookMouse from './Components/HookMouse';
import IntervalHookCounter from './Components/IntervalHookCounter';
import MouseContainer from './Components/MouseContainer';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import ConterOne from './Components/ConterOne';
import ConterTwo from './Components/ConterTwo';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC1 from './Components/ComponentC1';
import DataFetching1 from './Components/DataFetching1'


  export const UserContext  = React.createContext()
  export const ChannelContext = React.createContext()

 export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//          case 'reset':
//             return initialState
//         default :
//         return state
//     }
// }
function App() {
  // const [count,dispatch] = useReducer(reducer,initialState)
  return (
    // <CountContext.Provider 
    //     value = {{ countState:count, countDispatch: dispatch}} >
      <div className="App">
        <DataFetching1 />
      {/* Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC1 /> */}
      {/* <ConterTwo /> */}
      {/* <ConterOne /> */}
      {/* <UserContext.Provider value={'Bushra'}>
        <ChannelContext.Provider value = {'Mateen'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      </div>
  //   {/* </CountContext.Provider> */}
  // );
  )
}

export default App;
