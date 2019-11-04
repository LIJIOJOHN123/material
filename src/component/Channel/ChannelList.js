import React, { Fragment } from 'react';
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid, FormControlLabel, Zoom, Switch } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const checked = true

  return (

    <Fragment>
      <FormControlLabel control={<Switch checked={checked} />} />
      <Grid container>

        {[1, 2, 3, 43, 43, 43, 43, 4, 34, 34, 34].map(() =>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Zoom in={checked} timeout={750}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
          </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="https://img-mm.manoramaonline.com/content/dam/mm/mo/sports/cricket/images/2019/10/30/smith-warner.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Zoom>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
}
