import logo from './logo.svg';
import './App.css';
import Header from './user/component/Header/Header';
import Home from './user/container/Home/Home';
import Footer from './user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './user/container/About/About';
import Contect from './user/container/Contect/Contect';
import Testimonial from './user/container/Pages/Testimonial';
import Error from './user/container/Pages/Error';
import PropertyList from './user/container/Property/PropertyList';
import PropertyType from './user/container/Property/PropertyType';
import PropertyAgent from './user/container/Property/PropertyAgent';

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/pages' />
        <Route exact path='/testimonial' element={<Testimonial />} />
        <Route exact path='/error' element={<Error />} />
        <Route exact path='/property' />
        <Route exact path='/propertylist' element={<PropertyList/>}/>
        <Route exact path='/propertytype' element={<PropertyType/>}/>
        <Route exact path='/propertyagent' element={<PropertyAgent/>}/>
        <Route exact path='/contect' element={<Contect />} /> 
    
      </Routes>
      <Footer />

    </>
  );
}

export default App;
