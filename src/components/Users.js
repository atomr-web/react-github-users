import React from 'react'
import { Grid, LinearProgress, Typography } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import { User } from './User'

export const Users = (props) => {
    const error = props.error;
    const users = props.users;
    const isLoading = props.isLoading

    if (error) {

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <ErrorIcon className="error-icon" /> Error: {error.message}
            </Grid>
        )

    } else if (isLoading) {

        return <LinearProgress />

    } else {
        return (
            <div className="users-cards">
                <Grid container spacing={3}>
                    {
                        (users.length > 0) ?
                            users.map((item, i) => {
                                return (
                                    <User
                                        key={item.id}
                                        login={item.login}
                                        avatarUrl={item.avatar_url}
                                        html_url={item.html_url}
                                    />
                                )
                            }) :
                            <Grid item xs={12} className="center">
                                <Typography component="h3">
                                    Users not found
                                </Typography>
                            </Grid>
                    }
                </Grid>
            </div>
        )
    }
}