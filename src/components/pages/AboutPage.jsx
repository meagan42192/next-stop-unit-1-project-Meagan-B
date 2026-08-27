import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../layout/Header";

function AboutPage() {

    return (
        <main>
            <div>
                <Header />
                <Link to="/home">
                    <p>
                        <small className="back-text-wrapper">
                            <FaArrowLeft className="back-icon" />
                            Back to Home
                        </small>
                    </p>
                </Link>
            </div>
            <div>
                <h1>About Next Stop</h1>
                <p>Next Stop was created to make planning your next adventure simple and exciting. Explore beautiful destinations, discover places you’d love to visit, and keep your travel plans organized all in one place. Whether you’re planning an upcoming getaway, saving ideas for the future, or looking back on past adventures, Next Stop helps you keep track of every journey along the way.</p>
                <h2>Because the best part of every trip is deciding where to go next.</h2>
            </div>
        </main>
    );
};

export default AboutPage;