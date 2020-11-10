import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Formik } from 'formik';
import * as yup from 'yup';

class Auth1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pass: '',
      email: '',
    };

  }
handleChangeEmail = (event,values) => {
  

    this.setState({
      email: values
    }, () => {
      console.log(this.state.email);
    });
}
handleChange = (event) => {
  const { name, value } = event.target;

  this.setState({
    [name]: value
  });
}

onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}
handleButtonClick() 
{
  console.log(this.state);
  if (this.state.email === 'admin@mail.ru' && this.state.pass === 'admin') 
  {
    //this.props.login_bool(true);
    //if (this.props.logInf) {
      this.props.history.push('/main');
    //}
  }
  
  else if (this.state.email === 'viktor@mail.ru' && this.state.pass === 'viktor') 
  {
    //this.props.login_bool(true);
    //if (this.props.logInf) {
      this.props.history.push('/main');
    //}
  }
  else 
  {
    //this.props.login_bool(false);
    alert("Неверный пароль");
  }
  
  
}

  render() {
    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    }));
    const classes = useStyles;
    const { email, pass } = this.state;
    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
        </Typography>
          <form className={classes.form} noValidate>
          <Autocomplete
            onChange={this.handleChangeEmail} 
            id="email"
            freeSolo
            options={Emails.map((option) => option.title)}
            renderInput={(params) => (
          <TextField {...params} label="Email Addres" margin="normal" variant="outlined" margin="normal" required fullWidth id="email" name="email" value={email} autoFocus onChange={this.handleChange}/>
          )}
          />
          <Autocomplete 
            id="pass"
            freeSolo
            options={Passs.map((option) => option.title)}
            renderInput={(params) => (
          <TextField {...params} label="pass" margin="normal" variant="outlined" margin="normal" required fullWidth id="pass" name="pass" value={pass} autoFocus onChange={this.handleChange} type="password"/>
          )}
          />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleButtonClick.bind(this)}
            >
              
              Вход
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пороль?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );

  }
}

const Emails = [
  { title: 'admin@mail.ru'},
  { title: 'viktor@mail.ru'}
  
];
const Passs = [
  { title: 'А'},
  { title: 'Пороль'},
  { title: 'Нужно'},
  { title: 'Знать'}
  
];
export default Auth1;