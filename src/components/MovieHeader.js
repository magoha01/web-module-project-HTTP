import React from 'react';
import { Link } from 'react-router-dom';

const MovieHeader = ()=> {

const handleAddMovie = () => {
    console.log();
}

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <Link to="/movies/add" className="btn btn-success"><i className="material-icons">&#xE147;</i> <span onClick={handleAddMovie}>Add New Movie</span></Link>
            <Link to="/movies" className="btn btn-primary">View All Movies</Link>
        </div>
        </div>
    </div>);
}

export default MovieHeader;