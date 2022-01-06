import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ArrayLoves, picture, ArrLoves } from './ArrayLoves';
import { observer } from 'mobx-react';
import ShowPicLove from './ShowPicLove';
import '../App.css';

interface PictureProperties {
  ArrLoves: ArrayLoves;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

export default function Recents() {
  const classes = useStyles();

  return (
    <div>
      <div className="wellcome">
        { ArrLoves.lovepictures.length === 0 ?(<span>??? מה לא אהבת שום תמונה </span>):<span>(: התמונות האהובות עליך </span>}
      </div>
      {ArrLoves.lovepictures.map( p => <ShowPicLove  id={p.id} />)}
    </div>
  )
}
