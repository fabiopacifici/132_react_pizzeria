import PizzaCard from './PizzaCard/PizzaCard';
import pizze from '../data/pizze.js'

export default function AppMain() {

  const pageTitle = 'Pizzeria Menu';
  const pageDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum dignissimos rem saepe repellendus nulla blanditiis vel, debitis nihil deleniti, dolorum quaerat nam veritatis dolor ratione reprehenderit ab? Alias, necessitatibus?';


  console.log(pizze);


  return (
    <main>
      <div className="container">
        <h2>{pageTitle}</h2>
        <p>
          {pageDescription}
        </p>


        <section className="pizzas">
          {/* Add pizza cards here  */}

          {/*           {pizze.map(pizza => <PizzaCard key={pizza.id} name={pizza.name} image={pizza.image} description={pizza.description} price={pizza.price} />)} */}


          {pizze.map(pizza => <PizzaCard key={pizza.id} data={pizza}> <p>Fabio</p> </PizzaCard>)}




          {/*  <PizzaCard name="Margherita Veg" image="/images/1.jpg" description="Pizza margherita vegana con mozzarella" price="7" />


          <PizzaCard name="Diavola Veg" image="/images/2.webp" description="Pizza diavola vegana" price="8" /> */}



          {/*           <PizzaCard data={pizze[0]}>

            <p>Fabio was here</p>

          </PizzaCard> */}



        </section>


      </div>
    </main>
  )
}