import React from 'react';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export function Footer(props) {
    return (
        <footer>
            <Container>
                <Grid item xs={12} className="center">
                    <Link href="https://github.com/atomr-web/react-github-users" target="_blank" className="github-link">
                        <GitHubIcon className="github-link__icon" />
                        <Typography component="span" className="github-link__name">
                            Repository
                        </Typography>
                    </Link>
                </Grid>
            </Container>
        </footer>
    )
}