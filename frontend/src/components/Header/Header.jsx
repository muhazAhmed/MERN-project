import {Container} from 'react-bootstrap'
import React from 'react'

const Header = () => {
  return (
    <>
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Note Zipper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
    <nav className='m-auto'>
    <form className="d-flex" wtx-context="9BE7642B-CC77-4842-8B22-28A46C6BACCC">
        <input className="form-control me-sm-2" type="text" placeholder="Search" wtx-context="B696EC8E-0488-4F3A-8BBF-BA18C015E701"></input>
      </form>
      </nav>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="!#">My Notes</a>
        </li>
       <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="!#" role="button" aria-haspopup="true" aria-expanded="false">Muhaz Ahmed</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="!#">Profile</a>
            <a className="dropdown-item" href="!#">Log Out</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="!#">Separated link</a>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </Container>
    </>
  )
}

export default Header