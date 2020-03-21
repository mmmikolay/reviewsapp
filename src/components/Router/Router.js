import React, {useEffect} from 'react'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    useLocation,
  } from 'react-router-dom';
import Cookies from 'js-cookie';

import Auth from '../../pages/Admin/Auth';
import AdminPage from '../../pages/Admin/AdminPage';

import BookDetails from '../../pages/Details/BookDetails';
import MovieDetails from '../../pages/Details/MovieDetails';
import GameDetails from '../../pages/Details/GameDetails';

import AddAuthor from '../../pages/Forms/AddAuthor';
import AddBook from '../../pages/Forms/AddBook';
import AddDirector from '../../pages/Forms/AddDirector';
import AddMovie from '../../pages/Forms/AddMovie';
import AddStudio from '../../pages/Forms/AddStudio';
import AddGame from '../../pages/Forms/AddGame';

import Books from '../../pages/Books/Books';
import Movies from '../../pages/Movies/Movies';
import Games from '../../pages/Games/Games';

import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import SpecialThanks from '../../pages//SpecialThanks/SpecialThanks';

import MainMenu from '../../pages/MainMenu/MainMenu';


const ScrollToTop = () => {
const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

return null;
};

const Router = () => {

    const loggedIn = Cookies.get("signedin");

    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <ScrollToTop />
        <main>
          <Switch>
            <Route path ="/:item/details/:bookid" component = {BookDetails}/>
            <Route path ="/movie/details/:movieid" component = {MovieDetails}/>
            <Route path ="/game/details/:gameid" component = {GameDetails}/>


            {!loggedIn && <Redirect from = "/add_author" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/add_book" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/add_director" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/add_movie" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/add_studio" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/add_game" to = "/" exact/>}
            {!loggedIn && <Redirect from = "/admin_panel" to = "/" exact/>}

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

            <Route exact path ="/auth" component = {Auth}/>
            <Route exact path ="/admin_panel" component = {AdminPage}/>

            <Route exact path="/" component = {MainMenu}></Route>
            <Redirect to ="404" exact/>
          </Switch>
        </main>
    </BrowserRouter> 
    )
}

export default Router
