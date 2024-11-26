import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
//import AppMain from './components/AppMain'
``
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import MenuPage from './pages/MenuPage'
import PizzaPage from './pages/PizzaPage'
import NotFound from './pages/NotFound'
import PizzaCreatePage from './pages/PizzaCreatePage'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route path='/' element={<HomePage />} /> {/* Home page */}
            <Route path='/about' element={<AboutPage />} /> {/* About page */}
            <Route path='/contacts' element={<ContactsPage />} /> {/* Contacts page */}



            <Route path="/pizze">
              <Route index element={<MenuPage />} /> {/* Menu page */}
              <Route path='create' element={<PizzaCreatePage />} /> {/* Menu page */}
              <Route path=':id/' element={<PizzaPage />} /> {/* Single Pizza page */}
            </Route>


            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>


      {/*      <AppHeader />
      <AppMain />
      <AppFooter /> */}

    </>
  )
}

export default App
