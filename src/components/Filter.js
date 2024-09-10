import PropTypes from 'prop-types';
import '../styles/Filter.css';

export function Filter({ filter, setFilter }) {
    return (
        <div className='filter'>
            <label>
                Filter plants by taxon name:
                <input 
                    onChange={(e) => setFilter( e.target.value )} 
                    value={ filter } 
                />
            </label>
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
}