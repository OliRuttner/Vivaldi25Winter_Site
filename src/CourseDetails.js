import Apply from './Apply';
import Slideshow from './Slideshow';

const CourseDetails = () => {
    const images = [
        require('./graz.jpg'),
        require('./graz2.jpg'),
        require('./graz3.jpg'),
        require('./graz4.jpg')
    ];

    return ( 
        <div className="course-details">
            <div className="course-details-stuff">
                <div className="course-details-text">
                    <h2>Nailing it! - Woodworking in the Alps</h2>
                    <p>Ever admired a hand-carved table or chair and wondered, how was that made? 
                        Now's your chance to learn! This winter, BEST Graz is hosting a hands-on woodworking course for beginners and DIY lovers. 
                        <br />Grab your winter jacket and your hammer, and head to Graz at the foot of the Alps.</p>
                    <p><br />
                        <a href="https://www.google.com/maps/place/Graz,+Austria/@47.0732813,15.3595626,12z/data=!3m1!4b1!4m6!3m5!1s0x476e3587173065bb:0xfe8e8ad1d2dfdd9b!8m2!3d47.0678961!4d15.4417305!16zL20vMGQxeW4?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D">
                            Place: Graz, Austria</a> <br />
                        Dates: 6 February - 14 February 2026 <br />
                        <a href='https://www.best.eu.org/courses/list.jsp?season=winter25'> Season: Winter Season 2025 </a><br />
                        <a href="https://bestgraz.org/">Organised by: BEST Group Graz </a><br />
                        <a href="https://www.tugraz.at/en/">University: Graz University of Technology</a><br />
                        Price: 43.2 €
                    </p>
                </div>
                <div>
                    <Slideshow images={images} interval={3000} />
                </div>
            </div>
            <div>
                <Apply />
            </div>
        </div>
    );
}

export default CourseDetails;