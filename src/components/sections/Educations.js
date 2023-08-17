import {useContext} from "react";
import {ResumeContext} from "../../App"
import Education from "../elements/Education"


function educationsRow(educations, start, end) {
  const batch = educations.slice(start, end);
  let educationsComponents = [];
  batch.forEach((value, indx) => {
    educationsComponents.push(
      <div key={indx} className="column is-3">
        <Education
          institution={value.institution}        
          area={value.area}
          studyType={value.studyType}
          graduationYear={value.graduationYear}
        />
      </div>
    )
  });
  return educationsComponents;
}

export default function Educations() {
  const {resume} = useContext(ResumeContext);
  return (
    <section className="section" id="educations">
      <div className="container">
        <h1 className="title">Education</h1>
        <div className="columns">
          {educationsRow(resume.educations, 0, 4)}
        </div>
        <div className="columns">
          {educationsRow(resume.educations, 4, 8)}
        </div>
      </div>
    </section>
  );
}


