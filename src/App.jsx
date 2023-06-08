import './hi.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Section from './Section2/Section'
import Section3 from './Section3/Section3'
import Gallery from './Gallery/Gallery'
import Section4 from './Section4/Section4'


function App() {


  return (
    <div>
      <div className='container'>
        <Navbar></Navbar>
        <Header></Header>
        <Section></Section>
        <Section3></Section3>
        <Gallery></Gallery>
        <Section4></Section4>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
