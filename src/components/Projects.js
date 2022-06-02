import './assets/Projects.css'

export default function Projects () {

    const projects = [

        {
            title: 'Genre Finder',
            deployed: 'https://stumartin22.github.io/genre-finder/',
            repo: 'https://github.com/StuMartin22/genre-finder',
            img: 'genre-finder'
        },


        {
            title: 'Password Generator',
            deployed: 'https://glundy99.github.io/Password-Generator/',
            repo: 'https://github.com/GLundy99/Password-Generator',
            img: 'password-generator'
        },

        {
            title: 'Code Quiz',
            deployed: 'https://glundy99.github.io/Coding-Quiz/',
            repo: 'https://github.com/GLundy99/Coding-Quiz',
            img: 'codeing-quiz'
        },

        {
            title: 'Day Planner',
            deployed: 'https://glundy99.github.io/Work-Day-Scheduler/',
            repo: 'https://github.com/GLundy99/Work-Day-Scheduler',
            img: 'day-planner'
        },

    ]

    return (

        <div className='projects-container'>

            <div className='project-header'>
                <h1>Projects</h1>
                <hr />
            </div>

            <div className='project-content'>

                {projects.map((project) =>

                    <div className='project-card' key={project.title}>

                        <h1>{project.title}</h1>
                        <img alt='app screenshot' src={`/projects/${project.img}.png`} />

                        <div className='project-card-links-container'>
                            <a href={project.deployed}>Deployed App -- </a>
                            <a href={project.repo}>GitHub Repository</a>
                        </div>

                        <hr />
                        
                    </div>
                    
                )};

            </div>

        </div>
        
    );

};