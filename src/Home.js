import Course from "./Course";
import Testimonials from "./Testimonials";

const Home = () => {
    return ( <div className="home">
        <h1>Check out the course you can attend in winter!</h1>
        <Course />
        {<Testimonials />}
    </div> );
}
export default Home;