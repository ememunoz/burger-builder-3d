import * as RadixToast from '@radix-ui/react-toast'
import { useState } from 'react'
import { ColorManagement } from 'three'

import { Banner } from './components/Banner/Banner'
import { BurgerBuilder } from './components/BurgerBuilder/BurgerBuilder'
import { BurgerCard } from './components/BurgerCard'
import { Navbar } from './components/Navbar/Navbar'
import { Toast } from './components/Toast/Toast'

ColorManagement.enabled = true

function App() {
  const [isToastOpen, setIsToastOpen] = useState(false)
  const placeOrder = () => setIsToastOpen(true)

  return (
    <RadixToast.Provider swipeDirection='right' duration={2500}>
      <Navbar />
      <Banner />
      <main className="wrapper">
        <section className="full-bleed relative before:tile">
          <div className="wrapper">
            <div className="flex flex-col md:flex-row gap-6 py-16">
              <BurgerCard
                title="BBQ Bacon Burger"
                imgSrc="./assets/img/bbqburger.webp"
                description="Indulge in smoky BBQ flavors and crispy bacon. Juicy beef patty, Swiss cheese, tangy BBQ sauce, fresh lettuce, all between toasted buns. Flavor explosion!"
                onClick={placeOrder}
              />
              <BurgerCard
                title="Spicy Jalapeno Burger"
                imgSrc="./assets/img/jalapenoburger.webp"
                description="Fiery kick with juicy beef patty, jalapeno peppers, pepper jack cheese. Heat balanced with cool lettuce, ripe tomatoes, and creamy mayo. Thrill your senses!"
                onClick={placeOrder}
              />
              <BurgerCard
                title="Beyond Veggie Burger"
                imgSrc="./assets/img/veganburger.webp"
                description="Delightful vegan option. Plant-based patty with peas, mushrooms, and beets. Grilled to perfection. Fresh lettuce, ripe tomatoes, vegan mayo. Guilt-free delight!"
                onClick={placeOrder}
              />
            </div>
          </div>
        </section>
        <section className='py-8'>
          <h2 id='build-your-own' className='font-display text-2xl text-mintDark-700'>Build your own</h2>
          <BurgerBuilder />
        </section>
      </main>
      <footer className="wrapper bg-mintDark-700 py-8 text-white">
        <p className='mb-2'>
          Welcome to Build·a·Burger, a fictional restaurant crafted for the purpose of showcasing my developer skills.
        </p>
        <p className="mb-2">
          Please be aware that this website is entirely simulated and does not represent an actual establishment. It's a
          demonstration of my web development capabilities and creativity using React, ThreeJS and React Three Fiber,
          among others.
        </p>
        <p>
          Savor the virtual flavors and ambiance we 'serve,' and thank you for being our guest!"
        </p>
      </footer>
      <Toast bodySlot="Successfully added to your order!" open={isToastOpen} onOpenChange={setIsToastOpen} />
      <RadixToast.Viewport className='fixed bottom-0 right-0 p-4 w-full' />
    </RadixToast.Provider>
  )
}

export default App
