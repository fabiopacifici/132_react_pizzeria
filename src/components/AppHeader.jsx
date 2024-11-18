import reactLogo from '../assets/react.svg'

export default function AppHeader() {
  return (
    <header>
      <div className="container">
        <img src={reactLogo} alt="" />
        <strong>Pizzeria</strong>
      </div>
    </header>
  )
}