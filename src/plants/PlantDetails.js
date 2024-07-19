import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function PlantDetails() {
    const { plantId } = useParams();
    const plantURL = `https://api.inaturalist.org/v1/taxa/${plantId}`;
    const [plant, setPlant] = useState({});

    const getPlantByTaxonId = async () => {
        try {
            const res = await fetch(plantURL);
            const jsonRes = await res.json();
            setPlant(jsonRes.results[0]);
            console.log(jsonRes.results[0])
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getPlantByTaxonId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plantId])

    if (!plant.name) {
        return null;
    } 

    return (
        <main>
            <section className="banner">
                <h1>{plant.name}</h1>
                <img className="banner-img" src={plant.taxon_photos[0].photo.large_url} alt={``}/>
            </section>
            <section className="details">
                <h2>{plant.ancestors[5].name}</h2>
                <p>
                    Also known as {plant.preferred_common_name}, this plant has been recorded <b>{ plant.observations_count }</b> times on <a href="https://www.inaturalist.org/home" target="_blank" rel="noreferrer">iNaturalist</a>. 
                    {/* Ranked by { plant.conservation_statuses[0].description } plant. */}
                </p>
            </section>
            <section>
                <h3>Other photos of {plant.preferred_common_name}</h3>
                {plant.taxon_photos.map((entry) => {
                    return <img className="more-photos" src={entry.photo.medium_url} alt={`${plant.name} in habitat. ${entry.photo.attribution}`}/>
                })}
            </section>

        </main>
    );
}