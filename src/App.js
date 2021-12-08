

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


export const UserContext  = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ConterTwo />
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
  );
}

export default App;
