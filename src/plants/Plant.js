import { Link } from "react-router-dom";

export function Plant( { plant }) {
    const photoURL = plant.photos[0].url;
    const replacePhotoSize = "square";
    const newPhotoSize = "medium";

    const regex = new RegExp('\\b' + replacePhotoSize + '\\b', 'gi');
    const newURL = photoURL.replace(regex, newPhotoSize);
    
    return (
        <li>
            <Link to={`/plant/${plant.taxon.id}`} className="plant-page-link">
                <h3>{ plant.taxon.name } - <i>{ plant.taxon.preferred_common_name }</i></h3>
                <img src={newURL} alt={`${plant.taxon.name} in its habitat`} />
            </Link>
        </li>
    );
}