
var progress = {
  Advanced: 100,
  Intermediate: 66,
  Basic: 33
};

export default function ProgressBar({text, level}) {
  return (
    <div>
      <span className="title is-5 is-spaced">{text}</span>
      <span className="subtitle is-6 skill-percentage">{level}</span>
      <progress
        className="progress is-success"
        value={progress[level]}
        max="100"
      >
        {progress[level]}%
      </progress>
    </div>
  );
}


