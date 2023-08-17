import {useContext} from "react";
import {ResumeContext} from "../../App"
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";

export default function Timeline() {
  const {resume} = useContext(ResumeContext);

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        }).filter((value, index, self) => self.indexOf(value) === index)
        .map((year, i) => {
          let content = [];
          content.push(
            <TimelineHeader key={i} year={year}/>
          );
          content.push(
            resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-US", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    position={item.position}
                    website={item.website}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

