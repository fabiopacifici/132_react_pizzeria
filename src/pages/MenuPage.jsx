import { useEffect, useState } from 'react';
import PizzaCard from '../components/PizzaCard/PizzaCard';
import Jumbotron from '../components/Jumbotron';

import PizzaList from '../components/PizzaList';
import { Link } from 'react-router-dom';


export default function MenuPage() {


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



  return (
    <>

      <Jumbotron title={pageTitle} description={pageDescription}>

        <Link to='/pizze/create' className="btn btn-primary btn-lg">
          <i className="bi bi-plus"></i> Add
        </Link>
      </Jumbotron>

      <PizzaList>
        {menu.map(pizza => <PizzaCard key={pizza.id} data={pizza} handleDeleteClick={handleDeleteClick}> <p>{pizza.is_available ? 'Available' : 'Not Available'}</p> </PizzaCard>)}
      </PizzaList>


    </>
  )
}