// react
import React from 'react';

// external libs
// mui hooks
import { makeStyles } from '@material-ui/core';
// mui components
// mui icons
// hooks
// components
// services
// errors
// utils
// configuration
// icons
// assets
// styles

const useStyles = makeStyles((theme) => ({
    actionbar:{
        display: 'flex',
        borderBottom: '2px solid #000000',
        fontSize: 35,
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(3),
        margin: '30px 20px'
    },
    button: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginRight: theme.spacing(2),
        padding: theme.spacing(0),
        '&:hover': {
            opacity: '50%',
        }
    },
    title: {
        color: 'rgba(70,132,243,1)',
        marginLeft: theme.spacing(2),
        fontWeight: 'normal',
    }
}));

export default function ActionBar({ pageTitle, actions }){
    const classes = useStyles();    
    return(
        <section className={classes.actionbar} >
                <div className={classes.title}>{pageTitle}</div>
                <div className={classes.button}>{actions}</div>
        </section>    
    );
}