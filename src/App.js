import Hero from './components/Hero'
import Cards from './components/Cards'
import './App.css';
import Media from './components/Media'
import Comments from './components/Comments';
import Footer from './components/Footer'

function App() {
  return (
    <>
       <Hero/>
       <Cards/>
       <Media/>
       <Comments/>
       <Footer/>
       <div className="rights"><p>©2021 . Company . All rights reserved</p></div>
    </>
      
  );
}

export default App;
