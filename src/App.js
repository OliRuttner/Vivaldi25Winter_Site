import Navbar from './NavBar';
import Home from './Home';
import FAQ from './FAQ';
import CourseDetails from './CourseDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/FAQ" exact>
            <FAQ />
          </Route>
          <Route path="/courses/:courseId" exact component={CourseDetails} />
          <Route path="*">
            <div className="not-found">
              <h1>404 - Not Found</h1>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
