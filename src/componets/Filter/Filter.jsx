import React from "react";

export const Filter = ({ taskList,  setMyFilter, myFilter}) => {
  
  // const clearCompleted = () =>{
  //   let newList = [...myFilter].filter(item=> item.status !== true )
  //   setMyFilter(newList)
  // }

    const todoFilter =(status) =>{
        if(status === 'all'){
            setMyFilter(taskList)
        }
        else{
            let newList = [...taskList].filter(item => item.status === status)
            setMyFilter(newList)
        }
            
    }

  return (
    <div>
      <div className="flex justify-between px-4 h-10 items-center text-gray-400 ">
        <div>{taskList.length} items left</div>
        <button  onClick={()=> todoFilter('all')}className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-10">
          All
        </button>
        <button
          onClick={() => todoFilter(false)}
          className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-14"
        >
          Action
        </button>
        <button
          onClick={() => todoFilter(true)}
          className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-24"
        >
          Completed
        </button>
        <button className="hover:underline">Clear completed</button>
      </div>
    </div>
  );
};
