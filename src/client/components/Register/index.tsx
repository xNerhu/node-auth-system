import * as React from 'react';
import {
  Typography,
  TextField,
  Grid,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
const { Link } = require('@material-ui/core');
import { TextFieldProps } from '@material-ui/core/TextField';
import ReCAPTCHA from 'react-google-recaptcha';

import './styles.scss';

const { RECAPTCHA_SITE_KEY } = process.env;

interface IState {
  showPassword: boolean;
}

export default class Register extends React.Component<{}, IState> {
  public state: IState = {
    showPassword: false,
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword } = this.state;

    const inputProps: TextFieldProps = {
      className: 'form-textfield',
      type: 'text',
      margin: 'normal',
      variant: 'outlined',
    };

    const passwordInputProps = Object.assign({}, inputProps, {
      type: showPassword ? 'text' : 'password',
    });

    return (
      <div className="form-container">
        <form className="form">
          <Typography variant="h6" color="inherit">
            Create your account
          </Typography>
          <FormControl className="form-fieldset" component="fieldset">
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField
                  label="First name"
                  name="firstname"
                  {...inputProps}
                />
              </Grid>
              <Grid item xs>
                <TextField label="Last name" name="lastname" {...inputProps} />
              </Grid>
            </Grid>
            <TextField
              label="Email"
              type="email"
              name="email"
              {...inputProps}
            />
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField
                  label="Password"
                  helperText="Use at min 6 characters long"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment variant="filled" position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.togglePassword}
                        >
                          <div
                            className={`form-visibility-icon ${
                              showPassword ? 'off' : ''
                            }`}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...passwordInputProps}
                />
              </Grid>
              <Grid item xs>
                <TextField label="Confirm password" {...passwordInputProps} />
              </Grid>
            </Grid>
            {false && (
              <div className="form-recaptcha-container">
                <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} />
              </div>
            )}
            <FormControlLabel
              control={<Checkbox value="checkedH" />}
              label={
                <span>
                  I have accepted the&nbsp;
                  <Link href="/privacy-policy.pdf">
                    Terms of Use & Privacy Policy
                  </Link>
                </span>
              }
            />
            <div className="form-buttons-container">
              <Button color="primary">log in</Button>
              <Button variant="contained" color="primary">
                next
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
