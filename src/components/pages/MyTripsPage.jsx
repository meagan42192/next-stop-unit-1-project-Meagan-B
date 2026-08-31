import { useState } from "react";
import Header from "../layout/Header";

const MyTripsPage = ({ myTrips, setMyTrips }) => {

    const [activeTab, setActiveTab] = useState("upcoming");


    const upcomingTrips = myTrips.filter(
        (trip) => trip.status === "upcoming"
    );

    const pastTrips = myTrips.filter(
        (trip) => trip.status === "past"
    );

    const savedTrips = myTrips.filter(
        (trip) => trip.status === "saved"
    );


    const daysTraveled = pastTrips.reduce(
        (total, trip) => total + trip.lengthOfStayDays,
        0
    );


    const handleSingleDelete = (id, status) => {

        const updatedTrips = myTrips.filter(
            (trip) => !(trip.id === id && trip.status === status)
        );

        setMyTrips(updatedTrips);
    };


    return (
        <>
            <Header />

            <main className="my-trips-page">

                <h1 className="my-trips-page-title">
                    My Trips
                </h1>

                <h2>
                    View and manage your upcoming adventures
                </h2>


                {/* Dashboard */}

                <section className="my-trips-dashboard">

                    <div className="dashboard-stat">
                        <div>
                            <h2>{upcomingTrips.length}</h2>
                            <p>Upcoming Trips</p>
                        </div>
                    </div>

                    <div className="dashboard-stat">
                        <div>
                            <h2>{daysTraveled}</h2>
                            <p>Days Traveled</p>
                        </div>
                    </div>

                    <div className="dashboard-stat">
                        <div>
                            <h2>{savedTrips.length}</h2>
                            <p>Saved Destinations</p>
                        </div>
                    </div>

                </section>


                {/* Tabs */}

                <section className="my-trips-tabs">

                    <button
                        className={activeTab === "upcoming" ? "active-tab" : ""}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        Upcoming Trips
                    </button>

                    <button
                        className={activeTab === "past" ? "active-tab" : ""}
                        onClick={() => setActiveTab("past")}
                    >
                        Past Trips
                    </button>

                    <button
                        className={activeTab === "saved" ? "active-tab" : ""}
                        onClick={() => setActiveTab("saved")}
                    >
                        Saved Destinations
                    </button>

                </section>


                {/* Upcoming Trips */}

                {activeTab === "upcoming" && (
                    <section className="trips-booked-cards">
                        {upcomingTrips.length > 0 ? (
                            upcomingTrips.map((trip) => (
                                <div className="trip-card" key={trip.id}>
                                    <img
                                        className="trip-card-image"
                                        src={trip.image}
                                        alt={trip.location}
                                    />

                                    <div className="trip-card-content">
                                        <h2>{trip.location}</h2>
                                        <p>
                                            {trip.lengthOfStayDays} Days
                                        </p>


                                        <div className="trip-plan-details">
                                            <div>
                                                <strong>Flight</strong>
                                                <p>
                                                    {trip.flightDetails.airline}
                                                </p>
                                                <p>
                                                    ${trip.flightDetails.flightCost}
                                                </p>
                                            </div>


                                            <div>
                                                <strong>Hotel</strong>
                                                <p>
                                                    {trip.hotelDetails.hotelName}
                                                </p>
                                                <p>
                                                    ${trip.hotelDetails.hotelCost}
                                                </p>
                                            </div>
                                            <div>
                                                <strong>Excursions</strong>
                                                <p>
                                                    {trip.excursions.length} Activities
                                                </p>
                                            </div>
                                        </div>

                                        <div className="trip-card-bottom">

                                            <strong>
                                                Trip Total
                                            </strong>

                                            <span>
                                                ${trip.tripTotal}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleSingleDelete(
                                                        trip.id,
                                                        trip.status
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No upcoming trips yet.</p>
                        )}
                    </section>
                )}


                {/* Past Trips */}

                {activeTab === "past" && (
                    <section className="trips-booked-cards">
                        {pastTrips.length > 0 ? (
                            pastTrips.map((trip) => (
                                <div className="trip-card" key={trip.id}>
                                    <img
                                        className="trip-card-image"
                                        src={trip.image}
                                        alt={trip.location}
                                    />
                                    <div className="trip-card-content">

                                        <h2>{trip.location}</h2>

                                        <p>
                                            {trip.lengthOfStayDays} Days
                                        </p>

                                        <div className="trip-plan-details">

                                            <div>
                                                <strong>Flight</strong>
                                                <p>
                                                    {trip.flightDetails.airline}
                                                </p>
                                                <p>
                                                    ${trip.flightDetails.flightCost}
                                                </p>
                                            </div>

                                            <div>
                                                <strong>Hotel</strong>
                                                <p>
                                                    {trip.hotelDetails.hotelName}
                                                </p>
                                                <p>
                                                    ${trip.hotelDetails.hotelCost}
                                                </p>
                                            </div>

                                            <div>
                                                <strong>Excursions</strong>
                                                <p>
                                                    {trip.excursions.length} Activities
                                                </p>
                                            </div>

                                        </div>

                                        <div className="trip-card-bottom">

                                            <strong>
                                                Trip Total
                                            </strong>

                                            <span>
                                                ${trip.tripTotal}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleSingleDelete(
                                                        trip.id,
                                                        trip.status
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No past trips yet.</p>
                        )}
                    </section>
                )}


                {/* Saved Destinations */}

                {activeTab === "saved" && (
                    <section className="trips-booked-cards">
                        {savedTrips.length > 0 ? (
                            savedTrips.map((trip) => (
                                <div className="trip-card" key={trip.id}>
                                    <img
                                        className="trip-card-image"
                                        src={trip.image}
                                        alt={trip.location}
                                    />
                                    <div className="trip-card-content">
                                        <h2>{trip.location}</h2>
                                        <p>
                                            {trip.lengthOfStayDays} Days
                                        </p>

                                        <div className="trip-plan-details">
                                            <div>
                                                <strong>Flight</strong>
                                                <p>
                                                    {trip.flightDetails.airline}
                                                </p>
                                                <p>
                                                    ${trip.flightDetails.flightCost}
                                                </p>
                                            </div>
                                            <div>
                                                <strong>Hotel</strong>
                                                <p>
                                                    {trip.hotelDetails.hotelName}
                                                </p>
                                                <p>
                                                    ${trip.hotelDetails.hotelCost}
                                                </p>
                                            </div>
                                            <div>
                                                <strong>Excursions</strong>
                                                <p>
                                                    {trip.excursions.length} Activities
                                                </p>
                                            </div>
                                        </div>

                                        <div className="trip-card-bottom">
                                            <strong>
                                                Trip Total
                                            </strong>
                                            <span>
                                                ${trip.tripTotal}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleSingleDelete(
                                                        trip.id,
                                                        trip.status
                                                    )
                                                }
                                            >
                                               Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No saved destinations yet.</p>
                        )}
                    </section>
                )}
            </main>
        </>
    );
};

export default MyTripsPage;