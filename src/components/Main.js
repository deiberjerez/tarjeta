/* eslint-disable jsx-a11y/alt-text */
import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} className="email" />Email
            </button>
            <button className="main--btn btn--linkedin">
                <img src={linkedinLogo} className="linkedin"/>LinkedIn
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>Passionate programming student with a practical approach and versatile skills. I collaborate effectively in teams to build creative solutions. Committed to continuous learning and solving challenges in dynamic environments.!</p>
                <h3>Interests</h3>
                <p>In my free time, I immerse myself in video games to challenge myself and explore virtual worlds. I constantly learn and improve in programming. I enjoy social life, sharing laughter and moments with friends, feeding my creative and versatile mentality.!</p>
            </div>

        </div>
    )
}