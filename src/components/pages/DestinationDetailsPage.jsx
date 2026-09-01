import Header from "../layout/Header";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import destinationData from "../../data/destinationData";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const DestinationDetailsPage = ({ setMyTrips }) => {
    // Alert Banner for when buttons are clicked
    const [showAlert, setShowAlert] = useState(false);

    // Get the destination ID from the URL
    const { id } = useParams();

    // Find the destination that matches the ID
    const destination = destinationData.find(
        (destination) => destination.id === Number(id)
    );
    
        if (!destination) {
        return <ErrorPage />;
    }

        const handleAddTrip = (status) => {
        setMyTrips((currentTrips) => {
                // Prevent duplicate my trips
            const tripalreadyAdded = currentTrips.some(
                (trip) => trip.id === destination.id && trip.status === status
            );

            if (tripalreadyAdded) {
                return currentTrips;
            }
            return [
            ...currentTrips,
            {
                ...destination,
                status: status
            }
        ];
    });
    setShowAlert(true);
};

    const excursionsList = destination.excursions.map((excursion) => {
        return (
            <div key={excursion.id}>
                <h4>{excursion.title}</h4>
                <p>{excursion.description}</p>
                <p>Duration: {excursion.durationHours} hours</p>
                <p>Cost: ${excursion.cost}</p>
            </div>
        );
    });

    return (
        <>
            <Header />

            <main className="destination-details-main">

                {/* Back to Home */}
                <Link to="/home">
                    <p>
                        <small className="back-link">
                            <FaArrowLeft className="back-icon" />
                            Back to all destinations
                        </small>
                    </p>
                </Link>


                {/* Main Destination Section */}
                <div className="destination-hero">

                    {/* Destination Information */}
                    <div className="destination-info">

                        <h2 className="details-location-name">
                            {destination.location}
                        </h2>

                        <p className="details-country">
                            <strong>Country: </strong>
                            {destination.country}
                        </p>

                        <div className="destination-facts">

                            <p className="details-info">
                                <strong>Estimated Trip Cost: </strong>
                                <span>${destination.tripTotal}</span>
                            </p>

                            <p className="details-info">
                                <strong>Best Time to Visit: </strong>
                                <span>{destination.bestTimeToVisit}</span>
                            </p>

                            <p className="details-info">
                                <strong>Time Zone: </strong>
                                <span>{destination.timeZone}</span>
                            </p>

                        </div>

                    </div>


                    {/* Main Destination Image */}
                    <div className="details-main-image">

                        <img
                            className="details-destination-card-image"
                            src={destination.image}
                            alt={`Image of ${destination.location}`}
                        />

                    </div>

                </div>


                {/* Destination Image Gallery */}
                <div className="span-detail-images">

                    <img
                        src={destination.image2}
                        alt={`Image of ${destination.location}`}
                    />

                    <img
                        src={destination.image3}
                        alt={`Image of ${destination.location}`}
                    />

                    <img
                        src={destination.image4}
                        alt={`Image of ${destination.location}`}
                    />

                    <img
                        src={destination.image5}
                        alt={`Image of ${destination.location}`}
                    />

                </div>


                {/* Plan Your Trip */}
                <h2 className="plan-trip-header">
                    Plan Your Trip
                </h2>

                <div className="plan-trip-container">

                    {/* Flight */}
                    <div className="flight-info">
                        <h3>Flights</h3>

                        <p>
                            {destination.flightDetails.airline}
                        </p>

                        <p>
                            ${destination.flightDetails.flightCost}
                        </p>
                    </div>


                    {/* Hotel */}
                    <div className="hotel-info">
                        <h3>Hotels</h3>

                        <p>
                            {destination.hotelDetails.hotelName}
                        </p>

                        <p>
                            ${destination.hotelDetails.hotelCost}
                        </p>
                    </div>


                    {/* Excursions */}
                    <div className="excursion-info">
                        <h3>Excursions</h3>

                        {excursionsList}
                    </div>

                </div>
                <div className="about-destination">
                    <h3>About {destination.location}</h3>
                    {destination.about}
                </div>

                {/*Button Banner*/}
                {showAlert && (
                    <div className="banner">
                        Trip successfully added!
                        <button className="banner-close-btn" onClick={() => setShowAlert(false)}>
                            Close
                        </button>
                    </div>
                )}

                {/* Destination Buttons*/}
                    <div className="trip-buttons">
                        <button className="submit-btn" onClick={() => handleAddTrip("upcoming")}>
                            Add to Upcoming Trips
                        </button>

                        <button className="submit-btn" onClick={() => handleAddTrip("past")}>
                            Add to Past Trips
                        </button>

                        <button className="submit-btn" onClick={() => handleAddTrip("saved")}>
                            Save Destination
                        </button>

                    </div>
            </main>
        </>
    );
};

export default DestinationDetailsPage;