import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import HistoryLists from "./HIstoryLists";
import EmptyHistory from "./EmptyHistory";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const { userData } = useContext(UserContext);
  if (userData) {
    useEffect(() => {
      fetch("http://localhost:3551/chat/get-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userData._id }),
      })
        .then((res) => res.json())
        .then((res) => {
          setHistoryData(res.response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [userData]);
  }
  console.log("this is what i am getting fronm database", historyData);
  return (
    <>
      {userData && historyData.length !== 0 ? (
        <HistoryLists historyData={historyData} />
      ) : (
        <EmptyHistory />
      )}
    </>
  );
};
export default History;
