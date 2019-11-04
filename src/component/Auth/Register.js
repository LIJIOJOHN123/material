import React, { Fragment } from 'react';
import { Grid, Paper, Typography, makeStyles, TextField, Button, FormControlLabel, Switch, Slide } from '@material-ui/core';
import { connect } from 'react-redux'
import { setAlert, register } from '../../actions'
import PropTypes from 'prop-types'
import Alert from '../Alert';
import { Redirect } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
 heading: {
  textAlign: 'center',
  color: 'blue'
 },
 textField: {
  padding: 10
 },
 button: {
  paddingLeft: '30%'
 },
 hidden: {
  display: 'none'
 }
}))
const Register = (props) => {
 const checked = true
 const classes = useStyle()
 const [formData, setFormData] = React.useState({
  name: '',
  email: '',
  password: '',
  userName: ''
 })
 const { name, email, password, userName } = formData

 const handleFormChange = name => event => {
  setFormData({ ...formData, [name]: event.target.value })
 }
 const handleFormSubmit = () => {
  const newUser = {
   name,
   email,
   password,
   userName,
  }
  try {
   if (newUser.name.length < 4) {
    return props.setAlert("This is not matching", 'error')
   } else {
    props.register({ name, email, password, userName })
   }

  } catch (error) {
   console.log(error)
  }
 }
 //redirect
 if (props.isAuthenticated) {
  return <Redirect to='/' />
 }
 return (
  <Fragment>
   <Grid container>
    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>

    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
     <FormControlLabel className={classes.hidden} control={<Switch checked={checked} />} />
     <Slide in={checked} direction="right" timeout={750}>
      <Paper className={classes.textField}>
       <Alert />
       <Typography variant='h4' className={classes.heading}>
        Register
       </Typography>
       <TextField
        label="Name"
        value={name}
        onChange={handleFormChange('name')}
        autoFocus
        fullWidth
        type="text"
        margin="normal"
        variant="outlined"
       />
       <TextField
        label="User Name"
        onChange={handleFormChange('userName')}
        value={userName}
        fullWidth
        type="text"
        margin="normal"
        variant="outlined"
       />
       <TextField
        label="Email"
        value={email}
        onChange={handleFormChange('email')}
        fullWidth
        type="text"
        margin="normal"
        variant="outlined"
       />
       <TextField
        label="Password"
        onChange={handleFormChange('password')}
        value={password}
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
       />

       <div >
        <Button
         variant="contained"
         color="primary"
         onClick={handleFormSubmit}
        > Register</Button>
       </div>
      </Paper>
     </Slide>
    </Grid>
   </Grid>
  </Fragment>
 );
}
Register.proTypes = {
 setAlert: PropTypes.func.isRequired,
 register: PropTypes.func.isRequired,
 isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
 return {
  isAuthenticated: state.auth.isAuthenticated
 }
}
export default (connect(mapStateToProps, { setAlert, register }))(Register);