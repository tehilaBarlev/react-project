import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {context} from '../Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Picture from './Picture';
import { observer } from 'mobx-react';
import { ArrayLoves, picture, ArrLoves } from './ArrayLoves';

interface addProperties {
  ArrLoves: ArrayLoves;
}

const useStyless = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: deepOrange[300],
    },
  }),
);



 function RecipeReviewCard(props: any) {
    const allPictures = useContext(context);
    const p:picture={
      count: props.count,
      date: props.date,  
      creator: props.creator,
      id:props.id, 
      category:props.category
    }
    const [picToAdd, setPicToAdd]= useState(p)
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classess = useStyless();
    const [open, setOpen] = React.useState(false);

    const [colorState, setColorState] = React.useState(500);
    
    const [iconState, setIconState] = React.useState(<FavoriteBorderOutlinedIcon/>);
    const [countState, setCountState] = React.useState(props.count);
    const [flagState, setFlagState] = React.useState(false);    

    const countLove = () => {
        if(flagState)
        {
          setCountState(countState-1);
          setFlagState(false);
          setIconState(<FavoriteBorderOutlinedIcon/>);
          ArrLoves.delpicturelove(p);
        }
        if(!flagState)
        {
          setCountState(countState+1);
          setFlagState(true);
          setIconState(<FavoriteIcon/>);
          ArrLoves.addpicturelove(picToAdd);
  
        }
    }
    const handleOpen = () => {
      setOpen(true)
    };
    
    const handleClose = () => {
      setOpen(false)
    };
    useEffect(() => {
      if(ArrLoves.isExist(p))
        {
          setCountState(countState+1);
          setFlagState(true);
          setIconState(<FavoriteIcon/>);
        }
    }, []);

    return (
      <div className="showPic">
        <Router>
        <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {(props.creator[0])}
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                
            </IconButton>
            }
            title={props.creator}//props.creator
            subheader={props.date}//props.date
        />
        <Link to={`${url}/${props.id}`} className="link">
        <CardMedia
            className={classes.media}
            image={`../allPictures/${props.id}`}//props.id
            // title="Paella dish"
        /></Link>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={countLove}>
            {iconState}
          </IconButton>
          <Typography>{countState}</Typography> 
          <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>© racheli and tehila</Typography>
            </CardContent>
        </Collapse>
        </Card>
        <Switch>
          <Route path={`${path}/:id`}>
            <Picture image={props.id} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default observer(RecipeReviewCard);  
