const Emotionitem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "Emotionitem",
        isSelected ? `Emotionitem_on_${emotion_id}` : `Emotionitem_off`,
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img} alt="" />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default Emotionitem;
