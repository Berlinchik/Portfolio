import './Projects.scss'
import Loader from 'react-loaders'
import webstudio from 'assets/images/webstudio.png'
import finance from 'assets/images/finance.png'
import cocktails from 'assets/images/cocktails.png'
import taskpro from 'assets/images/taskpro.png'
import imagefinder from 'assets/images/imagefinder.png'
import icecream from 'assets/images/icecream.png'
import { useState, useEffect } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const projectsArray = [
  {
    id: 112,
    img: webstudio,
    title: 'HTML/CSS/JS',
    url: 'https://github.com/Berlinchik/WebStudio',
  },
  {
    id: 113,
    img: cocktails,
    title: 'HTML/CSS/JS',
    url: 'https://github.com/Berlinchik/Cocktails-team-project',
  },
  {
    id: 114,
    img: icecream,
    title: 'HTML/CSS/JS',
    url: 'https://github.com/DmytroRudenko11/BC-46-HelloWorld',
  },
  {
    id: 116,
    img: taskpro,
    title: 'HTML/CSS/REACT/NODE.JS',
    url: 'https://github.com/Berlinchik/TaskPro-frontend',
  },
  {
    id: 115,
    img: finance,
    title: 'HTML/CSS/REACT',
    url: 'https://github.com/Berlinchik/Finance-team-project',
  },
  {
    id: 117,
    img: imagefinder,
    title: 'REACT/CSS',
    url: 'https://github.com/Berlinchik/goit-react-hw-03-image-finder/tree/main',
  },
]

const Projects = () => {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      Notify.info('Design not mine')
      Notify.info('Just code')
    }
    setIsFirstRender(false)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <ul className="projectList">
          {projectsArray.map(({ img, title, url, id }) => (
            <li key={id} className="projectItem">
              <a
                target="_blank"
                rel="noreferrer"
                className="projectLink"
                href={url}
              >
                <img className="projectImage" src={img} alt={title} />
                <span className="projectTitle">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
