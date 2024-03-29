import twitterLogo from "../images/Twitter Icon.png"
import instaLogo from "../images/Instagram Icon.png"
import githubLogo from "../images/GitHub Icon.png"
import facebookLogo from "../images/Facebook Icon.png"

export default function Footer() {
    return(
        <div className="footer--container">
            <div className="footer--items">
            <img src={twitterLogo} alt="" className="footer--image" />
            <img src={instaLogo} alt="" className="footer--image" />
            <a href="https://github.com/deiberjerez/tarjeta" target="_blank">
                <img src={githubLogo} alt="" className="footer--image" />
            </a>
            <img src={facebookLogo} alt="" className="footer--image" />
            </div>
        </div>
    )
}