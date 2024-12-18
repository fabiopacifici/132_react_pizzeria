import { useEffect, useState } from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import Jumbotron from './Jumbotron';
import AddPizzaOffCanvas from './AddPizzaOffCanvas';
import PizzaList from './PizzaList';
import { Link } from 'react-router-dom';


//import { useEffect }
//import pizze from '../data/pizze.js'

/*const initialFormData = {
  name: '',
  description: '',
  price: 0,
  image: '',
  is_available: false
}  ✅ <-- need this */

export default function AppMain() {

  /*const [formData, setFormData] = useState(initialFormData)  ✅ <-- need this */
  const [menu, setMenu] = useState([])
  const pageTitle = 'Pizzeria Menu';
  const pageDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum dignissimos rem saepe repellendus nulla blanditiis vel, debitis nihil deleniti, dolorum quaerat nam veritatis dolor ratione reprehenderit ab? Alias, necessitatibus?';


  function fetchData(url = 'http://localhost:3001/pizze') {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response.data);
        const data = response.data
        setMenu(data)
      })
  }


  useEffect(() => {
    fetchData()
  }, [])


  //console.log(pizze);


  function handleDeleteClick(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));

    const id = e.target.getAttribute('data-id')

    fetch('http://localhost:3001/pizze/' + id, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        setMenu(response.data)

      })
  }


  /* Need this ✅ 
  function handleFormSubmit(e) {
    e.preventDefault()
    //console.log('Form sent', formData);
    const newItem = {
      id: Date.now(),
      ...formData
    }
    console.log(newItem);

    // make a post request to the api serve and pass over the newItem object to the setMenu state setter
    fetch('http://localhost:3001/pizze', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', response)
        setMenu(response.data)

      })
      .catch(error => console.error('Error:', error));


   
  setFormData(initialFormData)
  }*/

  /* Need this ✅ 
  function handleFormField(e) {
    //console.log(e.target);
  
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
  
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }*/


  return (
    <main>
      {/* Jumbotron */}
      <Jumbotron title={pageTitle} description={pageDescription}>

        {/* 
         This button can trigger the offcanvas component (but doesn't work 100%)
        <button className="btn btn-primary btn-lg" type="button" popovertarget="off-canvas-form">
          <i className="bi bi-plus"></i> Add
        </button> */}
        <Link to='/pizze/create' className="btn btn-primary btn-lg">
          <i className="bi bi-plus"></i> Add
        </Link>
      </Jumbotron>

      {/* Form Offcanvas: with props drilling
      <AddPizzaOffCanvas handleFormSubmit={handleFormSubmit} formData={formData} handleFormField={handleFormField} />*/}
      {/* <AddPizzaOffCanvas /> */}


      <PizzaList>
        {menu.map(pizza => <PizzaCard key={pizza.id} data={pizza} handleDeleteClick={handleDeleteClick}> <p>{pizza.is_available ? 'Available' : 'Not Available'}</p> </PizzaCard>)}
      </PizzaList>

    </main>
  )
}