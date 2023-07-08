import { ColorManagement } from 'three'

import { Banner } from './components/Banner/Banner'
import { BurgerBuilder } from './components/BurgerBuilder/BurgerBuilder'
import { BurgerCard } from './components/BurgerCard'
import { Navbar } from './components/Navbar/Navbar'

ColorManagement.enabled = true

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className="wrapper">
        <section>
          Build your own
          <div className="aspect-[9/16] md:aspect-video">
            <BurgerBuilder />
          </div>
        </section>
        <section className="full-bleed relative before:tile">
          <div className="wrapper">
            <div className="flex flex-col md:flex-row gap-6 py-16">
              <BurgerCard
                title="BBQ Bacon Burger"
                imgSrc="./assets/img/bbqburger.webp"
                description="Indulge in smoky BBQ flavors and crispy bacon. Juicy beef patty, Swiss cheese, tangy BBQ sauce, fresh lettuce, all between toasted buns. Flavor explosion!"
              />
              <BurgerCard
                title="Spicy Jalapeno Burger"
                imgSrc="./assets/img/jalapenoburger.webp"
                description="Fiery kick with juicy beef patty, jalapeno peppers, pepper jack cheese. Heat balanced with cool lettuce, ripe tomatoes, and creamy mayo. Thrill your senses!"
              />
              <BurgerCard
                title="Beyond Veggie Burger"
                imgSrc="./assets/img/veganburger.webp"
                description="Delightful vegan option. Plant-based patty with peas, mushrooms, and beets. Grilled to perfection. Fresh lettuce, ripe tomatoes, vegan mayo. Guilt-free delight!"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="wrapper bg-mintDark py-8 text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quibusdam provident voluptatum laborum asperiores fuga minima labore
          ea modi praesentium molestias, repellendus quasi ab! Laudantium
          impedit hic eos illo totam?
        </p>
      </footer>
    </>
  )
}

export default App
