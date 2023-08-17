import {useContext} from "react";
import {ResumeContext} from "../../App"
import NavBar from "./NavBar";


export default function Hero() {
  const {resume} = useContext(ResumeContext);
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">    
          <h1 className="title">
            <p>{resume.basics.label}</p>
            <p>{resume.basics.label2}</p>
           </h1>          
          <h2 className="subtitle">
            {resume.basics.location.region}, {resume.basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile" style={{backgroundColor:'gray'}}>
          <div className="column"></div>
          {resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}
