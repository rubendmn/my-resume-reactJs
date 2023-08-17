import {useContext} from "react";
import {ResumeContext} from "../../App"
import Badge from "../elements/Badge";


export default function AboutMe() {

  const {resume} = useContext(ResumeContext);

  return (
    <section className="section custom-background-color " id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width="180px"
            height="180px"
            src={resume.basics.picture}
            alt={resume.basics.name}
            className="is-rounded"
            onError={(e)=>{e.target.onerror = null; e.target.src=resume.basics.x_pictureFallback}}
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {resume.basics.x_title}
        </p>
        <div className="subtitle is-5 has-text-white has-text-weight-light summary-text" dangerouslySetInnerHTML={{__html: resume.basics.summary}}>
        </div>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

