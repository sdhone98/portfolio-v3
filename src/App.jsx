import {Flowbite} from "flowbite-react";
import Home from "./components/Hero.jsx";

import './App.css'
import Experience from "./components/Experience.jsx";

function App() {

  return (
      <>
          <div className='flex flex-col items-center justify-center'>

          <Flowbite>
              {/*<Header />*/}
              <Home/>
              <Experience/>

          </Flowbite>
          </div>


      </>
  )
}

export default App
