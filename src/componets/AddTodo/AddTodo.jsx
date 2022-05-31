import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import {v4} from 'uuid'

export const AddList = ({ taskList, setTaskList }) => {
  const [taskName, setTaskName] = useState("");
  const [allCompleted, setAllCompleted] = useState(false)


  const AllCompleted = () => {
     
    var newList = taskList.map((res, i) => {
      if (allCompleted == false) {
        return {
          id: res.id,
          hoverDelite: res.hoverDelite,
          status: res.status = true,
          text: res.text,
          edit:res.edit
        };
      } else {
        return {
          id: res.id,
          hoverDelite: res.hoverDelites,
          status: res.status = false,
          text: res.text,
          edit:res.edit
        };
      }
    });
    
    setTaskList(newList);
    setAllCompleted(!allCompleted)
  };



  const handleKeyDown = (event) => {
    if (event.key === "Enter" && taskName !== "") {
      setTaskList([
        { id: v4(), status: false, edit:false, text: taskName, hoverDelite: false },
        ...taskList,
      ]);
      setTaskName("");
    }
  };
  return (
    <div className=" relative ">
      <div
        onClick={() => AllCompleted()}
        className="h-[30px] text-[20px] absolute top-[25px] left-[15px] "
      >
        <BsChevronDown />
      </div>
      <input
        className="w-full h-[70px] border-b-[1px] pl-12 text-[24px] focus:outline-none"
        type="text"
        placeholder="What needs to be done?"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
