import {useContext} from "react";
import {ResumeContext} from "../../App"

export default function ContactMe() {
    const {resume} = useContext(ResumeContext);

    return (
      <div className="footer custom-background-color ">
        <div className="content has-text-centered has-text-white">
          <p>
            Built with <i className="fas fa-moon"></i> by {" "}
           <a href={(resume.basics.profiles.find(profile => profile.network === "GitHub")).url} className="has-text-white">
            <strong>{resume.basics.name}</strong>
          </a>
        </p>
          <p>Contact me at: <a className="has-text-white" href={"mailto:" + resume.basics.email}> {resume.basics.email}</a></p>
       </div> 
      </div>
    )
}

