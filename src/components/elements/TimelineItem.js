export default function TimelineItem({date,website,company,position,summary}) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{date}</p>
        <h1 className="title is-4"><a target="_blank" rel="noreferrer" href={website? website:""}>{company}</a></h1>
        <h2 className="subtitle is-6">{position}</h2>
        <p style={{ maxWidth: "25em" }}>{summary}</p>
      </div>
    </div>
  );
}


