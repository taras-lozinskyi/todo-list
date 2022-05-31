import React, { useState } from "react";
import { VscChromeClose, VscCheck } from "react-icons/vsc";

export const ListTodo = ({
  taskList,
  setTaskList,
  myFilter,
  setMyFilte,
  FILTER_MAP,
}) => {
  const [edit, setEdit] = useState(null);
  const [textEdit, setTextEdit] = useState("");

  const editTask = (id) => {
    setEdit(id);
    const newList = taskList
      .map((item) => (item.id === id ? item.text : ""))
      .join("");
    setTextEdit(newList);
  };
  console.log(textEdit);

  const removeTask = (id) => {
    let newList = [...taskList].filter((item) => item.id != id);
    setTaskList(newList.join(""));
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
    setTaskList([
      ...taskList.slice(0, i),
      {
        id: taskList[i].id,
        status: taskList[i].status,
        text: taskList[i].text,
        hoverDelite: true,
      },
      ...taskList.slice(i + 1),
    ]);
  };

  const MouseLeave = (i) => {
    setTaskList([
      ...taskList.slice(0, i),
      {
        id: taskList[i].id,
        status: taskList[i].status,
        text: taskList[i].text,
        hoverDelite: (taskList[i].hoverDelite = false),
      },
      ...taskList.slice(i + 1),
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
          id={item.id}
          mouseEnter={() => MouseEnter(index)}
          mouseLeave={() => MouseLeave(index)}
          edit={edit}
          editTask={() => editTask(item.id)}
          textEdit={textEdit}
          setTextEdit ={setTextEdit}
        />
      ))}
    </div>
  );
};

const Tasks = (props) => {
  return (
    <div className="bg-white ">
      <div
        className="w-full h-[70px] pl-2  flex items-center  border-b-[1px]"
        onMouseEnter={props.mouseEnter}
        onMouseLeave={props.mouseLeave}
      >
        {props.edit === props.id ? (
          <div className=" w-[55px] h-full"></div>
        ) : (
          <div className="w-[55px] flex items-center">
            <div onClick={props.statusTodo} className=" ">
              {props.keyValue === true ? (
                <div className="  flex  justify-center items-center h-9 w-9 border border-green-400 rounded-full ">
                  <VscCheck className="h-5 w-5 text-green-400" />
                </div>
              ) : (
                <div className=" flex  justify-center items-center h-9 w-9 p-[16px] border rounded-full  "></div>
              )}
            </div>
          </div>
        )}
        <div
          onClick={props.editTask}
          className="flex justify-between w-full text-2xl"
        >
          {props.edit === props.id ? (
            <input
              className=" pt-[18px] pb-[17px] w-full  placeholder:text-[#4d4d4d] placeholder:no-underline focus:outline-none focus:box-border focus:border-[1px] focus:shadow-[inset_1px_1px_10px_0px_rgba(0,0,0,0.2)] focus:border-[#999] placeholder:outline-none pr-0"
              type="text"
              value={props.textEdit}
              onChange={(e) => props.setTextEdit(e.target.value)}
            />
          ) : (
            <div
              className={
                props.keyValue === true
                  ? "text-2xl line-through text-gray-400 flex justify-center w-full"
                  : "text-2xl flex w-full "
              }
            >
              <div className="flex justify-between items-center w-full">
                <div>{props.taskName}</div>

                <div>
                  {props.hoverValue === true ? (
                    <button
                      className="text-[#cc9a9a] text-lg mr-4 "
                      onClick={props.taskRemove}
                    >
                      {<VscChromeClose />}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
