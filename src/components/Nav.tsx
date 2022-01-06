import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import '../App.css';
import SmashCake from './SmashCake';
import NewBorn from './NewBorn';
import Children from './Children';
import HomePage from './HomePage';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});
  
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Nav = () => {

    let { path, url } = useRouteMatch();

    const classes = useStyles();
    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;}

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div role="presentation" onClick={toggleDrawer(anchor, false) } onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <Divider /> 
                <Link to={`${url}/`} className="link"><ListItem button key={' all pictures '}><DragIndicatorIcon/><ListItemText primary={'all pictures'} /></ListItem></Link>
                <Divider />
                <Link to={`${url}/NewBorn`} className="link"><ListItem button key={' NewBorn '}><DragIndicatorIcon/><ListItemText primary={' NewBorn '} /></ListItem></Link>
                <Link to={`${url}/SmashCake`} className="link"><ListItem button key={' Smash Cake '}><DragIndicatorIcon/><ListItemText primary={'SmashCake'} /></ListItem></Link>
                <Link to={`${url}/Children`} className="link"><ListItem button key={' Children '}><DragIndicatorIcon/><ListItemText primary={'Children'} /></ListItem></Link>
                <Divider /> 
            </List>    
        </div>
    );

    return (
        <div className="Nav">
            <Router>
                
                <div>       
                    <Button onClick={toggleDrawer("left", true)}><span>{"<< לכל הקטגוריות"}</span></Button>
                    <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>
                </div>
                <Switch>
                    <Route path={`${path}/NewBorn`}>
                        <NewBorn />
                    </Route>
                    <Route path={`${path}/SmashCake`}>
                        <SmashCake />
                    </Route>
                    <Route path={`${path}/Children`}>
                        <Children />
                    </Route>
                    <Route path={`${path}/`} exact>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div> 
    );
}
export default Nav;