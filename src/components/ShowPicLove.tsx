import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from '@material-ui/core/IconButton';

import '../App.css';
import { observer } from 'mobx-react';
import { ArrayLoves, picture, ArrLoves } from './ArrayLoves';
import { render } from '@testing-library/react';

interface addProperties {
  ArrLoves: ArrayLoves;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
  },
  media: {
    height: 350,
  },
});

export default function ShowPicLove(props:any) {

  const [arr, setArr] : [picture[], Function] = React.useState(ArrLoves.lovepictures);

  const removePi = () => {
    ArrLoves.delpictureloveById(props.id)
    setArr(...ArrLoves.lovepictures);

  }
  useEffect(() => {

    setArr(...ArrLoves.lovepictures);
    
  },[arr] );
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={`../allPictures/${props.id}`}
          />
      </Card>
      <div>
        <IconButton aria-label="add to favorites" onClick={removePi}>
          <FavoriteIcon/>
        </IconButton>
        <span>להסרה מהרשימה שלי</span>
      </div>
    </div>
    
  );
}
