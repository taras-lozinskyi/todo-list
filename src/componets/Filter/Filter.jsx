import React, { useEffect } from "react";

export const Filter = ({ taskList, setTaskList, setMyFilter, myFilter, filterName, }) => {
  const clearCompleted = () => {
    let newList = [...taskList].filter((item) => item.status !== true);
    setTaskList(newList);
  };

  const visibleButton = () => {
    return [...taskList].some((item) => item.status === true);
  };




  const todoFilter = (status) => {
    if (status === "all") {
      setMyFilter(taskList);
    } else {
      let newList = [...taskList].filter((item) => item.status === status);
      setMyFilter(newList);
    }
  };

  return (
    <div>
      <div className="flex justify-between pl-4  pr-4 h-10 items-center text-gray-400 ">
        <div className="w-[330px] flex justify-between">
        <div className="flex items-center">
          {[...taskList].filter((item) => item.status === false).length} items
          left
        </div>
        
          <button
            onClick={() => todoFilter(filterName[0])}
            className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-10"
          >
            All
          </button>
          <button
            onClick={() => todoFilter(filterName[1])}
            className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-14"
          >
            Action
          </button>
          <button
            onClick={() => todoFilter(filterName[2])}
            className="focus:border hover:border hover:border-[rgba(175,47,47,0.2)] focus:border-[rgba(175,47,47,0.2)] w-24"
          >
            Completed
          </button>
        </div>
     
        {visibleButton()&& (
          <button onClick={() => clearCompleted()} className="hover:underline ">
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
};
