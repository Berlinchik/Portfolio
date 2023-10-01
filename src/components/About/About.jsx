import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'

const cubeInfo = [
  { className: 'face1', icon: faNodeJs, color: '#DD0031', id: '11' },
  { className: 'face2', icon: faHtml5, color: '#F06529', id: '22' },
  { className: 'face3', icon: faCss3, color: '#28A4D9', id: '33' },
  { className: 'face4', icon: faReact, color: '#5ED4F4', id: '44' },
  { className: 'face5', icon: faJsSquare, color: '#EFD81D', id: '55' },
  { className: 'face6', icon: faGithub, color: '#EC4D28', id: '66' },
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Davyd, an aspiring web developer with a passion for
            creating digital experiences. While my formal education is in
            Architecture, I discovered my true calling in the world of IT about
            a year ago. Since then, I've been on a transformative journey,
            pursuing my interest in web development through rigorous training at{' '}
            <a className="goit" target="_blank" href="https://goit.global/us/">
              GoIT
            </a>{' '}
            Academy.
          </p>
          <br />
          <p>
            I'm from <span className="ua">Ukraine</span>, recently arrived to
            USA and looking for a role in established IT company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects.
          </p>
          <br />
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a wonderful son, a sports fan, and
            tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespiner">
            {cubeInfo.map(({ className, icon, color, id }) => (
              <div key={id} className={className}>
                <FontAwesomeIcon icon={icon} color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
