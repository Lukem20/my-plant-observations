import { Link } from "react-router-dom";
import '../styles/PlantListItem.css';

export function PlantListItem( { plant }) {
    const photoURL = plant.photos[0].url;
    const replacePhotoSize = "square";
    const newPhotoSize = "medium";

    const regex = new RegExp('\\b' + replacePhotoSize + '\\b', 'gi');
    const newURL = photoURL.replace(regex, newPhotoSize);
    
    return (
        <li>
            <Link to={`/plant/${plant.taxon.id}`} className="plant-page-link">
                <img className='plant-img-square' src={newURL} alt={`${plant.taxon.name} in its habitat`} />
                <div className="plant-names">
                    <h3>{ plant.taxon.name }</h3>
                    <h4><i>{ plant.taxon.preferred_common_name }</i></h4>
                </div>
            </Link>
        </li>
    );
}