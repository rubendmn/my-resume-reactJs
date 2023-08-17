
export default function Education({institution,area,studyType, graduationYear}) {
    return (
        <div className="card skill-card">
            <div className="card-content">
                <div className="media">             
                    <div className="media-content">
                        <p className="skill-title is-size-5">{area}</p>
                        <p className="skill-title is-size-6">{institution}</p>
                        <p className="has-text-grey is-size-7">{studyType}</p>
                        <p className="has-text-grey is-size-7">Graduation year: {graduationYear}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

