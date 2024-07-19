import { Plant } from "../plants/Plant";
import { Filter } from "../components/Filter";
import { useState, useEffect } from "react";

const API_URL = "https://api.inaturalist.org/v1/observations?native=true&taxon_id=47126&user_id=lukemoore&quality_grade=research&order=desc&order_by=created_at";

export function PlantList() {
    const [ filter, setFilter ] = useState("");
    const [ plants, setPlants ] = useState([]);

    const getPlants = async () => {
        try {
            const res = await fetch(API_URL);
            const jsonRes = await res.json();
            setPlants(jsonRes.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect( () => {
        getPlants()
    }, []);

    return (
        <section>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="plant-list">
                { plants.filter((plant) => plant.taxon.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(( plant ) => {
                    return (
                        <Plant key={plant.id} plant={plant} />
                    );
                }) }
            </ul>
        </section>
    );
}