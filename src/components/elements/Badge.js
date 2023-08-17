export default function Badge({text, faIcon}) {

  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{text}</span>
        <span className="tag is-success">
          <i className={"fas fa-1x " + faIcon}></i>
        </span>
      </div>
    </div>
  );
}


