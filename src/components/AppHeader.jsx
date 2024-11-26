import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

export default function AppHeader() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={reactLogo} alt="" />
          <strong>Pizzeria</strong>
        </div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
          <NavLink to='/pizze'>Pizze</NavLink>

        </nav>
      </div>
    </header>
  )
}