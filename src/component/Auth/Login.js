import React, { Fragment } from 'react';
import { Grid, Paper, makeStyles, Typography, TextField, Button, Slide, Switch, FormControlLabel } from '@material-ui/core'
import { login } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const userStyle = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    color: 'blue'
  },
  paper: {
    padding: 10

  },
  button: {
    paddingLeft: '40%'
  },
  hidden: {
    display: 'none'
  }
}))
const Login = (props) => {
  const checked = true
  const classes = userStyle()
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  const handleChange = email => event => {
    setFormData({ ...formData, [email]: event.target.value })
  }
  const handleSubmit = () => {
    const loginUser = {
      email, password
    }
    props.login(loginUser)
  }
  if (props.isAuthenticated) {
    return <Redirect to='/' />
  }
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} x={4}>
          <div className={classes.hidden}>
            <FormControlLabel control={<Switch checked={checked} />} />
          </div>
          <Slide in={checked} timeout={750} direction="right">
            <Paper className={classes.paper}>
              <Typography variant='h4' className={classes.header}>
                Login
      </Typography>
              <TextField
                label="Name"
                autoFocus
                fullWidth
                value={email}
                onChange={handleChange('email')}
                type="text"
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                label="Password"
                fullWidth
                value={password}
                onChange={handleChange('password')}
                type="password"
                margin="normal"
                variant="outlined"
              />
              <div className={classes.button}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >Login</Button>
              </div>

            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </Fragment>
  );
}
Login.proTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { login })(Login);