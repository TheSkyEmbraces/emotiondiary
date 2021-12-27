import React, { useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//COMPONENTS

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "라라라라라라",
    date: 1640587383600,
  },
  {
    id: 2,
    emotion: 2,
    content: "ㄴ먀럼냐랴냚냘",
    date: 1640587383601,
  },
  {
    id: 3,
    emotion: 3,
    content: "ㄴ쇄ㅔㄴㅅ고ㅔㅐㅏ",
    date: 1640587383602,
  },
  {
    id: 4,
    emotion: 4,
    content: "ㅌㅊ픀ㅊ퓨",
    date: 1640587383603,
  },
  {
    id: 5,
    emotion: 5,
    content: "나니뉴내ㅑ네",
    date: 1640587383604,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{ onCreate, onEdit, onRemove }}
      ></DiaryDispatchContext.Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/Diary/:id" element={<Diary />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryStateContext.Provider>
  );
}

export default App;
