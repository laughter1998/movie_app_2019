import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import "./Detail.css";


class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    const {
        data : {
          data: { movies }
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies:movies , isLoading: false});
  }
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const {isLoading, movies}= this.state;
    return (
      <section className="container">
        {isLoading ?
          (<div className="loader"><span className="loader__text">loading...(다른 페이지에서 home으로 돌아올때 로딩 보기 싫으면 redux? 를 사용)</span></div>)
          : movies.map(movie => {
          // console.log(movie);
          return (
            <div className="movies">
              {  <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />

              }
            </div>
          );

        })}
      </section>
  );
  }
}
// https://yts-proxy.now.sh/list_movies.json
export default Home;
