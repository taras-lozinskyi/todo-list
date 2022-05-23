import React from "react";
import { VscChromeClose, VscCheck } from "react-icons/vsc";

export const ListTodo = ({ taskList, setTaskList, myFilter, setMyFilter }) => {
  const removeTask = (id) => {
    let newList = [...taskList].filter((item) => item.id != id);
    setTaskList(newList);
  };

  const statusTodo = (id) => {
    let newList = [...taskList].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTaskList(newList);
  };

  const MouseEnter = (i) => {
    setMyFilter([
      ...myFilter.slice(0, i),
      {
        id: myFilter[i].id,
        status: myFilter[i].status,
        text: myFilter[i].text,
        hoverDelite: true,
      },
      ...myFilter.slice(i + 1),
    ]);
  };

  const MouseLeave = (i) => {
    setMyFilter([
      ...myFilter.slice(0, i),
      {
        id: myFilter[i].id,
        status: myFilter[i].status,
        text: myFilter[i].text,
        hoverDelite: (myFilter[i].hoverDelite = false),
      },
      ...myFilter.slice(i + 1),
    ]);
  };

  return (
    <div>
      {myFilter.map((item, index) => (
        <Tasks
          taskName={item.text}
          statusTodo={() => statusTodo(item.id)}
          keyValue={item.status}
          hoverValue={item.hoverDelite}
          taskRemove={() => removeTask(item.id)}
          key={item.id}
          mouseEnter={() => MouseEnter(index)}
          mouseLeave={() => MouseLeave(index)}
        />
      ))}
    </div>
  );
};

const Tasks = (props) => {
  return (
    <div className="bg-white ">
      <div
        className="w-full h-[70px] flex items-center px-4 border-b-[1px]"
        onMouseEnter={props.mouseEnter}
        onMouseLeave={props.mouseLeave}
      >
        <div onClick={props.statusTodo} className="mr-4">
          {props.keyValue === true ? (
            <div className="p-[6px] border border-green-400 rounded-full ">
              <VscCheck className="h-5 w-5 text-green-400" />
            </div>
          ) : (
            <div className="p-[16px] border rounded-full "></div>
          )}
        </div>
        <div className="flex justify-between  w-full">
          <div
            className={
              props.keyValue === true
                ? "text-2xl line-through text-gray-400"
                : "text-2xl "
            }
          >
            {props.taskName}
          </div>
          {props.hoverValue === true ? (
            <button onClick={props.taskRemove}>{<VscChromeClose />}</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
