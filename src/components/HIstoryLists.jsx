import "../styling/dashboard.css";
import HistoryList from "./Hstory-list-component";
const HistoryLists = ({ historyData }) => {
  console.log("this is the array :", historyData);
  return (
    <div
      className="dashboard-container"
      style={{ backgroundColor: "transparent !important" }}
    >
      <div className="chat-area">
        {historyData.map((data) => {
          return <HistoryList data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
};
export default HistoryLists;
