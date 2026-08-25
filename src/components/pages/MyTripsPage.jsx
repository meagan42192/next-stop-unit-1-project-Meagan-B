import Header from "../layout/Header";

const MyTripsPage = ({ myTrips, setMyTrips }) => {

    const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

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

    return(
        <>
            <Header />

            <main className="my-trips-page">
                <h2 className="my-trips-page-title">My Trips</h2>
                <h5>View and manage your upcoming adventures</h5>
                <section className="my-trips-dashboard">
                    <h3>{upcomingTrips.length} Upcoming Trips</h3>
                    <h3>{daysTraveled} Days Traveled</h3>
                    <h3>{savedTrips.length} Saved Destinations</h3>
                </section>
                <section className="my-trips-tabs">
                    <div className="my-trips-column">
                    <h4>Upcoming Trips</h4>
                    {upcomingTrips.map((trip) => (
                        <div className="trip-card" key={trip.id}>
                            <img
                                className="trip-card-image"
                                src={trip.image}
                                alt={trip.location}
                                />
                                <h5>{trip.location}</h5>
                            <button
                                onClick={() => handleSingleDelete(trip.id, trip.status)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    </div>

                    <div className="my-trips-column">
                    <h4>Past Trips</h4>
                    {pastTrips.map((trip) => (
                        <div className="trip-card" key={trip.id}>
                            <img
                                className="trip-card-image"
                                src={trip.image}
                                alt={trip.location}
                                />
                                <h5>{trip.location}</h5>
                        <button
                            onClick={() => handleSingleDelete(trip.id, trip.status)}
                        >
                            Delete
                        </button>
                        </div>
                    ))}
                    </div>

                    <div className="my-trips-column">
                    <h4>Saved Destinations</h4>
                    {savedTrips.map((trip) => (
                        <div className="trip-card" key={trip.id}>
                            <img
                                className="trip-card-image"
                                src={trip.image}
                                alt={trip.location}
                                />
                                <h5>{trip.location}</h5>
                            <button
                                onClick={() => handleSingleDelete(trip.id, trip.status)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default MyTripsPage;