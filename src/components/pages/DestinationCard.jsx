import Card from '../common/Card';
import destinationData from '../../data/destinationData';
import destinationDetails from "../../data/destinationData";
import { useNavigate } from "react-router-dom";


const DestinationCard = ({ destination }) => {
    return (
        <Card clickable={true}>
            <img
                className="destination-card-image"
                src={destination.image}
                alt={`Image of ${destination.location}`}
            />
            <div className="details-card-text">
                <h3 className="destination-card-location">{destination.location}</h3>
                <p className="artwork-card-artist">${destination.tripTotal}</p>
            </div>
        </Card>
    );
};

export default DestinationCard;