import React from 'react'
import { Grid, Card, CardContent, Avatar, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    avatar: {
        width: 65,
        height: 65,
        marginBottom: 10
    },
    name: {
        marginBottom: 10
    },
})

export const User = (props) => {
    const classes = useStyles();    

    return (
        <Grid item xs={12} md={4} lg={3}>
            <Card className="users-cards__card">
                <CardContent className="user-card__content">
                    <Avatar
                        className={classes.avatar} 
                        alt={props.login} 
                        src={props.avatarUrl}
                    />
                    <Typography className={classes.name} noWrap variant="h4">
                        {props.login}
                    </Typography>
                    <Link href={props.html_url} target="_blank" rel="noreferrer">
                        Profile
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    )
}