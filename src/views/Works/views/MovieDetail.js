import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "data/movieState";
// Styles
import {
  Details,
  HeadLine,
  Awards,
  Award,
  ImageDisplay,
} from "./MovieDetail.styles";
// Animations
import { pageAnimation } from "styles/animation";
import ScrollTop from "components/common/ScrollTop";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  // UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
      <ScrollTop />
    </>
  );
};

export default MovieDetail;
