import Card from '../common/Card';
import destinationData from '../../data/destinationData';
import destinationDetails from "../../data/destinationData";
import { useNavigate } from "react-router-dom";


const DestinationCard = ({ destination }) => {
    return (
        <div className="destination-card-content">

            <img
                className="destination-card-image"
                src={destination.image}
                alt={destination.location}
            />

            <div className="destination-card-overlay">
                <h3>{destination.location}</h3>
                <p>From: ${destination.tripTotal}</p>
            </div>

        </div>
    );
};

export default DestinationCard;