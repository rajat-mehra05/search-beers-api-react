const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={item.image_url} alt="beer" height={200} width={200} />
      </div>
      <div className="info-container">
        <h2> {item.name} </h2>
        <h3>
          {" "}
          Tagline: <span> {item.tagline} </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Card;
