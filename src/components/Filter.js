import PropTypes from 'prop-types';

export function Filter({ filter, setFilter }) {
    return (
        <label>
            Filter by taxon name:
            <input 
                onChange={(e) => setFilter( e.target.value )} 
                value={ filter } 
            />
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
}