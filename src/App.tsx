import React,{ useState,useEffect,useContext } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NavigationIcon from '@material-ui/icons/Navigation';
import CardMedia from '@material-ui/core/CardMedia';
import HomePage from './components/HomePage';
// import CardsLove from './components/CardsLove';
import Love from './components/Love';
import Nav from './components/Nav';

import MyFavoritePictures from './components/MyFavoritePictures';
import Category from './components/Category';
import MyComponent from './components/MyComponent';
import Home from './components/HomeCmp';
const useStyles = makeStyles((theme) =>({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const handleChange = (event: any, newValue:any) => {
    setValue(newValue);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
              <Link to="/"><BottomNavigationAction label="Recents" value="recents" icon={<CameraAltIcon />} /></Link>
              <Link to="/nav"><BottomNavigationAction label="Nearby" value="nearby" icon={<NavigationIcon />} /></Link>
              <Link to="/love"><BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} /></Link>
              <Link to="/My Favorite Pictures"><BottomNavigationAction label="My Favorite Pictures" value="nearby" icon={<AccountCircleRoundedIcon />} /></Link>
            </BottomNavigation>
          </nav>

          <Switch>
            <Route path="/love">
              { <Love/>}
            </Route>
            <Route path="/nav">
              { <Nav />}
            </Route>
            <Route path="/My Favorite Pictures">
              { 
                <MyFavoritePictures />
               }
            </Route>
            <Route path="/" exact>
              {/* { 
              <div>
                <div className="wellcome1"></div>
                <img src={`../allPictures/26521.jpg`} width="100%"/>
              </div>
              } */}
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
/*
  home page
  nav 
    new born
    smach cake
    children
  recents 
  love
*/