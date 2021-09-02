// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, index) => {
          const fraseKey = `Movie Title ${index + 1}`;
          return <MovieCard movie={ movie } key={ fraseKey } />;
        })}
      </div>
    );
  }
}

// MovieList.defaultProps = {
//   movies: [{
//     title: '',
//     subtitle: '',
//     storyline: '',
//     rating: 0,
//     imagePath: '',
//   }],
// };

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
