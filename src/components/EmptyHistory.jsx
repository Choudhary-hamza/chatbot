import "../styling/EmptyHistory.css";
const EmptyHistory = () => {
  return (
    <div className="empty-history-container">
      <div className="empty-message">
        <h2>No History Found</h2>
        <p>
          It seems like you haven't chatted yet. Start a conversation to see
          your history.
        </p>
      </div>
    </div>
  );
};
export default EmptyHistory;
