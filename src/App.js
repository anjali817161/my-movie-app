import './index.css';
import MovieList from "./movieList"
import Navbar from './Navbar';
import { Component } from 'react';
import { movies } from './moviesData';

class App extends Component {
  constructor(){
    super();
this.state = {
    movies : movies,
    cartCount:0,
    favCount:0
}
}

handleIncStar = (movie) =>{
const {movies} = this.state;

const mid = movies.indexOf(movie);

if(movies[mid].stars >=5){
return;
}
movies[mid].stars +=0.5;

this.setState({
    movies:movies

})
}

handleDecStar = (movie) =>{
const {movies} = this.state;

const mid = movies.indexOf(movie);

if(movies[mid].stars <=0){
return;
}
movies[mid].stars -=0.5;

this.setState({
    movies

})
}

handleToggleFav= (movie)=>{
let {movies,favCount} = this.state;
const mid = movies.indexOf(movie);
movies[mid].fav = !movies[mid].fav;

if(movies[mid].fav){
  favCount = favCount+1
}
else{
  favCount-=1;
}

this.setState({
    movies,
    favCount
})
}

handleToggleInCart= (movie)=>{
let {movies,cartCount} = this.state;
const mid = movies.indexOf(movie);
movies[mid].cart = !movies[mid].cart;

if(movies[mid].cart){
   cartCount = cartCount+1
}
else{
   cartCount -= 1;
}

this.setState({
    movies,
    cartCount
})
}
  render(){
    const {movies,cartCount,favCount} = this.state;
  return (
    <>
    <Navbar  cartCount = {cartCount}
              favCount = {favCount}/>
    <MovieList movies = {movies}
              decStars = {this.handleDecStar}
              addStars = {this.handleIncStar}
              handleFav = {this.handleToggleFav}
              handleCart= {this.handleToggleInCart}/>
   
    </>
  );
}
}

// student.defaultProps ={
//   name:"Student",
//   marks:"N.A"
// }

export default App;
