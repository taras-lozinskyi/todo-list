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

  const FILTER_MAP ={
    'All' : true || false,
    "Active" : false,
    "Completed" :true
  }

  
  const FILTER_NAMES = ['All', 'Active', "Completed"]

  const [myFilter, setMyFilter] = useState(taskList);

  
  
  useEffect(() =>{
    setMyFilter(taskList)
  }, [taskList] )


  return (
   
      <div className="w-[500px] h-full m-auto">
        <Header />
        
        <div className="w-full shadow-[0_5px_25px_0_rgb(0,0,0,0.2)]  z-50 bg-white">
          <AddList taskList={taskList} setTaskList={setTaskList}  />
          <ListTodo taskList={taskList} setTaskList={setTaskList} myFilter={myFilter} setMyFilter={setMyFilter} FILTER_MAP={FILTER_MAP} />
          <Filter taskList={taskList} setTaskList={setTaskList} setMyFilter={setMyFilter}  myFilter={myFilter} FILTER_NAMES={FILTER_NAMES} FILTER_MAP={FILTER_MAP}/>
        </div>

        <div className="bg-white w-[490px] h-[6px] m-auto z-10 border-t-[1px]"></div>
        <div className="bg-white w-[480px] h-[6px] m-auto z-10 border-t-[1px]"></div>

        <div className="w-full h-[200px] flex justify-center items-center">
        
          <a target="_blank" className="flex hover:underline" href="https://github.com/taras-lozinskyi/todo-list"><FaGithub className="mr-2 mt-[2px]"/>Github</a>
        </div>
      </div>
    
  );
}



export default App;
