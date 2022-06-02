import './assets/Skills.css'

export default function Skills () {

    return (

        <section id="technical-skills">

            <h3>Technical Skills</h3>

            <div class="card-holder">

                <div class="card">
                <h3>HTML</h3>
                <img
                    src={require("../assets/img/badges/html-badge.png")}
                    alt=""
                    class="skill-badge"
                />
                <p>
                    HTML is a markup language used for structuring and presenting
                    content on the internet that is easily accessible to users.
                </p>
                </div>

                <div class="card">
                <h3>CSS</h3>
                <img
                    src={require("../assets/img/badges/css-badge.png")}
                    alt=""
                    class="skill-badge"
                />
                <p>
                    CSS is a style sheet language used for the presentation of a 
                    document written in a markup language like HTML.
                </p>
                </div>

                <div class="card">
                <h3>JavaScript</h3>

                <img
                    src={require("../assets/img/badges/javascript-badge.png")}
                    alt=""
                    class="skill-badge"
                />
                <p>
                    JavaScript is a scripting language that enables you to create
                    dynamically updating content, as well as many other features.
                </p>
                </div>

                <div class="card">
                <h3>Node.js</h3>

                <img
                    src={require("../assets/img/badges/node-badge.png")}
                    alt=""
                    class="skill-badge"
                />
                <p>
                    Node.js is an open-source, back-end JavaScript runtime environment 
                    which executes JS code outside a web browser.
                </p>
                </div>

                <div class="card">
                <h3>React</h3>
                <img
                    src={require("../assets/img/badges/react-badge.png")}
                    alt=""
                    class="skill-badge"
                />
                <p>
                    React is a free and open-source front-end JavaScript library for
                    building user interfaces based on UI components.
                </p>
                </div>

            </div>

        </section>

    );

};