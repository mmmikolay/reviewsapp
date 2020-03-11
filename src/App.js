import React, { useEffect } from 'react';


import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
//PAGES

import BookDetails from './pages/Details/BookDetails';
import MovieDetails from './pages/Details/MovieDetails';
import GameDetails from './pages/Details/GameDetails';

import AddAuthor from './pages/AddAuthor/AddAuthor';
import AddBook from './pages/AddBook/AddBook';
import AddDirector from './pages/AddDirector/AddDirector';
import AddMovie from './pages/AddMovie/AddMovie';
import AddStudio from './pages/AddStudio/AddStudio';
import AddGame from './pages/AddGame/AddGame';

import Books from './pages/Books/Books';
import Movies from './pages/Movies/Movies';
import Games from './pages/Games/Games';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SpecialThanks from './pages/SpecialThanks/SpecialThanks';

import MainMenu from './pages/MainMenu/MainMenu';

//STYLES
import './index.css';


//APOLLO-CLIENT SETUP
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
})

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {



  return (
      <>
      <ApolloProvider client={client}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path ="/book/details/:bookid" component = {BookDetails}/>
            <Route path ="/movie/details/:movieid" component = {MovieDetails}/>
            <Route path ="/game/details/:gameid" component = {GameDetails}/>

            <Route exact path ="/add_author" component = {AddAuthor}/>
            <Route exact path ="/add_book" component = {AddBook}/>
            <Route exact path ="/add_director" component = {AddDirector}/>
            <Route exact path ="/add_movie" component = {AddMovie}/>
            <Route exact path ="/add_studio" component = {AddStudio}/>
            <Route exact path ="/add_game" component = {AddGame}/>

            <Route exact path ="/books" component = {Books}/>
            <Route exact path ="/movies" component = {Movies}/>
            <Route exact path ="/games" component = {Games}/>

            <Route exact path ="/about" component = {About}/>            
            <Route exact path ="/contact" component = {Contact}/>
            <Route exact path ="/thanks" component = {SpecialThanks}/>

            <Route exact path="/" component = {MainMenu}></Route>
          </Switch>
        </Router>  
      </ApolloProvider>   
      </>
  )
}

export default App;