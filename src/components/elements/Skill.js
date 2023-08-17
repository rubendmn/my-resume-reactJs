export default function Skill({icon, text,description}) {
    return (
        <div className="card skill-card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <span className={`skill-icon custom-color is-size-3 fa-solid ${icon}`}></span>
                    </div>
                    <div className="media-content">
                        <p className="skill-title is-size-6">{text}</p>
                        <p className="has-text-grey is-size-7">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

