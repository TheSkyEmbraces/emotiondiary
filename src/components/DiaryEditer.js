import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "./../App";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import Emotionitem from "./Emotionitem";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/images/emotion1.png`,
    emotion_descript: "날아감",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/images/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/images/emotion3.png`,
    emotion_descript: "보통",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/images/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/images/emotion5.png`,
    emotion_descript: "끔찍함",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditer = () => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate("/", { replace: true });
  };

  return (
    <div className="DiaryEditer">
      <MyHeader
        headText={"일기 쓰기"}
        leftChild={<MyButton text={"이전"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <Emotionitem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmotion}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section className="input_box text_wrapper">
          <h4>일기 내용</h4>
          <textarea
            placeholder="오늘 하루 어땠나요?"
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"작성취소"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditer;
