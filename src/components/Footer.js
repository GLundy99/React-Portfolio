import './assets/Footer.css'

export default function Footer () {

    return (

        <footer>

        <a href="mailto:griffinlundquist99@gmail.com">
            <img
            className="logo-links"
            src={require("../assets/img/email-icon.png")}
            alt="email icon"/>
        </a>

        <a href="https://github.com/GLundy99">
            <img className="logo-links"
            src={require("../assets/img/github-icon.png")}
            alt="github icon"/>
        </a>

        <a href="https://www.linkedin.com/in/griffin-lundquist-a1a88517a/">
            <img
            className="logo-links"
            src={require("../assets/img/linkedin-icon.png")}
            alt="linkedIn icon"/>
        </a>

        <a href="tel:+7635681755">
            <img
            className="logo-links"
            src={require("../assets/img/phone-icon.png")}
            alt="phone icon"/>
        </a>

        </footer>

    );

};