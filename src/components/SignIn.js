import React, { Component, useState } from 'react'
import { compose } from 'redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { handleSignIn } from '../actions/userAction'
import Alert from '@material-ui/lab/Alert'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'

function Copyright () {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -12,
  },
})

class SignIn extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: true,
    }
  }

  processSubmit (values) {
    const { dispatch } = this.props
    dispatch(handleSignIn(values))
  }

  render () {
    const { classes } = this.props
    const { isLoading, errMess, jwt_token } = this.props.user
    const signUpSchema = Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string().required('Required'),
    })

    if (jwt_token) {
      return (
        <Redirect to={'/home'}/>
      )
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <Formik
            initialValues={{ loading: false, email: '', password: '', remember: '' }}
            validationSchema={signUpSchema}
            onSubmit={(values) => this.processSubmit(values)}
          >
            {
              ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                  <TextField
                    error={errors.email && touched.email}
                    helperText={(errors.email && touched.email) && errors.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    error={errors.password && touched.password}
                    helperText={(errors.password && touched.password) && errors.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={values.password}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" name="remember" onChange={handleChange} color="primary"/>}
                    label="Remember me"
                  />
                  <div className={classes.wrapper}>
                    {
                      errMess && this.state.open && (
                        <Alert severity={'error'} onClose={() => {this.setState({ open: false })}}>This is a success
                          alert — check it
                          out!</Alert>
                      )

                    }
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={isLoading}
                    >
                      Sign In
                    </Button>
                    {isLoading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                  </div>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {'Don\'t have an account? Sign Up'}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              )
            }
          </Formik>
        </div>
        <Box mt={8}>
          <Copyright/>
        </Box>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}
export default compose(withStyles(useStyles), connect(mapStateToProps))(SignIn)
