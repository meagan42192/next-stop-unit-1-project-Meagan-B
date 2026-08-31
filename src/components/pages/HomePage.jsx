import { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinationDetails from "../../data/destinationData";
import DestinationCard from "./DestinationCard";
import Card from '../common/Card';
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredDestinations = destinationDetails.filter((destination) =>
        destination.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const destinationHome = ({ isLoading, home = [], homeError }) => {
        const navigate = useNavigate();

        const handleGoToDestinationDetailsPage = () => {
            navigate('/destinationDetails');
        };

        if (homeError) {
            return (
                <ErrorPage>
                    <p>{homeError}</p>
                </ErrorPage>
            );
        } else {
            let homeJSX = filteredDestinations.map((destination) => {
                return (
                    <Link
                        key={destination.id}
                        to={`/destination/${destination.id}`}
                    >
                        <li className="destination-card-item">
                            <DestinationCard destination={destination} />
                        </li>
                    </Link>
                );
            });

            return (
                <>
                <Header />
                <main>
                    <div className="homepage-quotes">
                        <h2 className="homePage-header">Where will your next adventure take you?</h2>
                        <h3 className="homePage-header-2"><small>Explore destinations and start planning your perfect trip.</small></h3>
                    </div>
                    <div className="search-destinations">
                        <input
                            type="text"
                            placeholder="Type to filter..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {filteredDestinations.length ? (
                        <div className="destination-card">{homeJSX}</div>
                    ) : (
                        <p>
                            There are no items to display
                        </p>
                    )}
                </main>
                </>
            );
        }
    };

    return destinationHome({});
};

export default HomePage;