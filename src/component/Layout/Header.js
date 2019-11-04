import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import { logOut } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }

}));


const ButtonAppBar = ({ auth: { isAuthenticated, loading }, logOut }) => {
    const classes = useStyles();

    const authLink = (
        <Toolbar>
            <SideBar />
            <Typography variant="h6" className={classes.title}>
                News
        <Link to='/'><Button color='secondary'>Home</Button></Link>
            </Typography>
            <Link to='/logout'><Button
                color="secondary"
                onClick={logOut}
            >Logout
            </Button></Link>
        </Toolbar>
    )
    const guestLink = (
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                News
        <Link to='/'><Button color='secondary'>Home</Button></Link>
            </Typography>
            <Link to='/register'><Button color="secondary">Register</Button></Link>
            <Link to='/login'><Button color="secondary">Login</Button></Link>
        </Toolbar>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {!loading && (<Fragment>
                    {isAuthenticated ? authLink : guestLink}
                </Fragment>
                )}


            </AppBar>
        </div>
    );
}
ButtonAppBar.propTypes = {
    logOut: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logOut })(ButtonAppBar)
