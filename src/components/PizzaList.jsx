export default function PizzaList({ children }) {
  return (
    <div className="container">

      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Add pizza cards here  */}
        {children}
      </section>


    </div>
  )
}