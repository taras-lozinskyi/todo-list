import React, { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';

import "./App.css";
import { Header} from './componets/Header/Header'
import {AddList} from './componets/AddTodo/AddTodo'
import {ListTodo} from './componets/ListTodo/ListTodo'
import {Filter} from './componets/Filter/Filter'

function App() {
  const [taskList, setTaskList] = useState([
  ]);

  const [myFilter, setMyFilter] = useState(taskList);

  useEffect(() =>{
    setMyFilter(taskList)
  }, [taskList] )

  console.log(...myFilter )




  return (
   
      <div className="w-[500px] h-full m-auto">
        <Header />
        
        <div className="w-full shadow-[0_5px_25px_0_rgb(0,0,0,0.2)]  z-50 bg-white">
          <AddList taskList={taskList} setTaskList={setTaskList}  />
          <ListTodo taskList={taskList} setTaskList={setTaskList} myFilter={myFilter} setMyFilter={setMyFilter} />
          <Filter taskList={taskList} setTaskList={setTaskList} setMyFilter={setMyFilter}  myFilter={myFilter}/>
        </div>

        <div className="bg-white w-[490px] h-[6px] m-auto z-10 border-t-[1px]"></div>
        <div className="bg-white w-[480px] h-[6px] m-auto z-10 border-t-[1px]"></div>

        <div className="w-full h-[200px] flex justify-center items-center">
        <FaGithub/>
          <a target="_blank"className="ml-2" href="https://github.com/taras-lozinskyi/todo-list">Github</a>
        </div>
      </div>
    
  );
}



export default App;
