import React from 'react'
import {CardActionArea, CardActions, CardContent, CardMedia, Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core"

const useStyle = makeStyles({
    root:{
        maxWidth:'400px'
    }
})

const Card = () => {
    const classes = useStyle()

    return (
        <>
        <div className="main">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
      </Card>
      </div> 
     </>
    )
}

export default Card
