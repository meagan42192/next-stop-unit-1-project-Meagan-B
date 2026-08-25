import { useState } from 'react';
import Login from './components/pages/Login';
import './App.css';
import PackingList from './components/pages/PackingListPage';
import HomePage from './components/pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import DestinationDetailsPage from './components/pages/DestinationDetailsPage';
import MyTripsPage from './components/pages/MyTripsPage';
import AboutPage from './components/pages/AboutPage';

function App() {
    const [myTrips, setMyTrips] = useState([]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/home" element={<HomePage />} />

                <Route path="/list" element={<PackingList />} />

                <Route path="/about" element={<AboutPage />} />


                <Route
                    path="/destination/:id"
                    element={
                        <DestinationDetailsPage
                            myTrips={myTrips}
                            setMyTrips={setMyTrips}
                        />
                    }
                />
                    <Route
                        path="/trips"
                        element={
                            <MyTripsPage
                                myTrips={myTrips}
                                setMyTrips={setMyTrips}
                            />
                        }
                    />
            </Routes>

            <Footer />
        </>
    );
}

export default App;