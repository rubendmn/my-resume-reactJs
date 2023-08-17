import {useState,useContext} from "react";
import {ResumeContext} from "../../App"
import MenuItem from "./MenuItem";

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const {resume} = useContext(ResumeContext);

    
  const handleMenuClick =(e) =>{
    const currentState = showMenu;
    setShowMenu(!currentState);    
  }

    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable my-name">
              {resume.basics.name}
            </a>
            <span
              className="navbar-burger burger"
              onClick={handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={handleMenuClick}>
              <MenuItem text="About Me" href="#aboutMe" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Certifications" href="#certifications" />
              <MenuItem text="Experience" href="#experience" />
              <MenuItem text="Education" href="#educations" />
              <MenuItem text="Articles" href="#articles" />
            </div>
          </div>
        </div>
      </nav>
    );
  }



