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
import { isEmail } from 'validator';

import { validate } from '@shared/utils';
import { IValidationErrors } from '@shared/interfaces';
import './styles.scss';

const { RECAPTCHA_SITE_KEY } = process.env;

interface IState {
  showPassword: boolean;
  errors: IValidationErrors;
}

export default class Register extends React.Component<{}, IState> {
  public state: IState = {
    showPassword: false,
    errors: {},
  };

  private inputs: { [i: string]: HTMLInputElement } = {};

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  onSubmit = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.inputs;

    const errors = await validate({
      firstName: {
        message: 'Enter first name',
        test: firstName.value.trim().length > 0,
      },
      lastName: {
        message: 'Enter last name',
        test: lastName.value.trim().length > 0,
      },
      email: {
        message: 'Enter email',
        test: isEmail(email.value),
      },
      password: [
        {
          message: 'Enter a password',
          test: password.value.trim().length > 0,
        },
        {
          message: 'Use at min 6 characters long',
          test: password.value.trim().length >= 6,
        },
      ],
      confirmPassword: {
        message: 'Confirm password',
        test:
          password.value.trim().length < 6 ||
          password.value.trim() === confirmPassword.value.trim(),
      },
    });

    this.setState({ errors });
  };

  render() {
    const { showPassword, errors } = this.state;

    const inputProps: TextFieldProps = {
      type: 'text',
      margin: 'normal',
      variant: 'outlined',
      fullWidth: true,
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
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  inputRef={r => (this.inputs.firstName = r)}
                  {...inputProps}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Last name"
                  name="lastname"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  inputRef={r => (this.inputs.lastName = r)}
                  {...inputProps}
                />
              </Grid>
            </Grid>
            <TextField
              label="Email"
              type="email"
              name="email"
              error={!!errors.email}
              helperText={errors.email}
              inputRef={r => (this.inputs.email = r)}
              {...inputProps}
            />
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField
                  label="Password"
                  error={!!errors.password}
                  helperText={errors.password}
                  inputRef={r => (this.inputs.password = r)}
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
                <TextField
                  label="Confirm password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  inputRef={r => (this.inputs.confirmPassword = r)}
                  {...passwordInputProps}
                />
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
                  I have accepted&nbsp;
                  <Link href="/privacy-policy.pdf">
                    the Terms of Use & Privacy Policy
                  </Link>
                </span>
              }
            />
            <div className="form-buttons-container">
              <Button color="primary">log in</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
              >
                next
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
