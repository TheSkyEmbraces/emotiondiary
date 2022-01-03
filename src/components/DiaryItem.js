import React from "react";
import { useNavigate } from "react-router";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  //이거 안하면 이미지 인식을 못함 아주 중요

  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString().slice(0, 12);

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/emotion${emotion}.png`}
          alt=""
        />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
