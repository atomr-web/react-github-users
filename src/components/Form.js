import React from 'react';
import { Grid, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export const Form = (props) => {
    return (
        <form onSubmit={props.getUsers}>
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={9}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="my-input">User</InputLabel>
                        <Input 
                            id="my-input" 
                            required={true} 
                            autoFocus={true} 
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button 
                        color="primary" 
                        variant="contained" 
                        type="submit" 
                        size="large" 
                        disableElevation
                    >
                        <SearchIcon/>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </form>
        
    )
}