const ResourcesComponent = ({ data }) => {
  return (
    <div className="card card_main" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{data.name}</p>
      </div>
    </div>
  );
};
export default ResourcesComponent;
