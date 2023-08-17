
export default function Article({title, url, image, extract}) {

  return (
    <div className="card article">
      <div className="card-header">
        <a href={url} target="blank">
          <p className="card-header-title">{title}</p>
        </a>
        <a
          href={url}
          target="blank"
          className="card-header-icon"
          aria-label="Dev Community"
        >
          <span className="icon custom-color">
            <i className="fab fa-2x fa-dev"></i>
          </span>
        </a>
      </div>
      <div className="card-image">
        <figure className="image">
          <img width="1000" height="420" src={image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="heading">DEV.TO</h1>
        <div className="content">
          <p>{extract}</p>
        </div>
        <a href={url}  className="custom-color"target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}


