import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar'
import Modal from 'components/Modal/Modal'
import './Layout.scss'

const Layout = () => {
  const isMobileSize = useMediaQuery({ query: '(max-width: 1199px)' })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selector, setSelector] = useState(null)

  const onClose = () => {
    setSelector('isHidden')
  }
  useEffect(() => {
    if (selector === 'isHidden' && isSidebarOpen) {
      const timer = setTimeout(() => {
        setIsSidebarOpen(false)
      }, 400)
      return () => clearTimeout(timer)
    }
    if (isSidebarOpen) {
      setSelector('visible')
    }
  }, [selector, isSidebarOpen])

  return (
    <div className="App">
      {!isMobileSize && <Sidebar />}

      <div className="page">
        {isSidebarOpen && (
          <Modal onClose={onClose} isOpen={selector}>
            <Sidebar isOpen={selector} />
          </Modal>
        )}
        {isMobileSize && !isSidebarOpen && (
          <button
            className="burger-menu"
            onClick={() => {
              setSelector(null)
              setIsSidebarOpen(true)
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
