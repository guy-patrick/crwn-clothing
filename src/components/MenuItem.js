import { withRouter } from "react-router-dom";

const MenuItem = ({ item, history, match: { url } }) => {
  const { title, imageUrl, size, linkUrl } = item;

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
