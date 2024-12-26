import "../styling/dashboard.css";
const HistoryList = ({ data }) => {
  console.log("this is single data :", data);

  return (
    <div
      className={`chat-bubble ${
        data.sender === "user" ? "user-bubble" : "ai-bubble"
      }`}
    >
      {data.text}
    </div>
  );
};
export default HistoryList;
