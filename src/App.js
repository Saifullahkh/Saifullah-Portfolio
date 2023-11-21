import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './Component/MyNavbar'
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Feature from './Pages/Feature';
import Project from './Pages/Project';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact';
import Education from './Pages/Resume/Education';
import Skill from './Pages/Resume/Skill';
import Experience from './Pages/Resume/Experience';

function App () {
  return (
    <div className="bg-dark text-white">
      {/* <MyNavbar /> */}
      {/* <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/feature" Component={Feature} />
          <Route path="/project" Component={Project} />
          <Route path="/resume" Component={Resume}>
            <Route path='' Component={Education} />
            <Route path='skill' Component={Skill} />
            <Route path='experience' Component={Experience} />
          </Route>
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter> */}

      <MyNavbar />
      <Home />
      <Feature />
      <Project />
      <Resume />
        <Education /> 
        <Skill />  
        <Experience/>
      <Contact />
    </div>
  );
}

export default App;
