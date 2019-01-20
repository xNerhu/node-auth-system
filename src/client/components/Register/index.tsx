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

import Form from '@shared/models/form';
import { IFormErrors } from '@shared/interfaces';
import { registerSchema } from '@shared/validation';
import './styles.scss';

const { RECAPTCHA_SITE_KEY, NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

interface IState {
  showPassword: boolean;
  privacyPolicyAccepted: boolean;
  recaptchaChecked: boolean;
  errors: IFormErrors;
}

export default class Register extends React.Component<{}, IState> {
  public state: IState = {
    showPassword: false,
    privacyPolicyAccepted: false,
    recaptchaChecked: false,
    errors: {},
  };

  private form = new Form(registerSchema);

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  onSubmit = () => {
    const errors = this.form.validate();
    console.log(errors);
    this.setState({ errors });
  };

  onCheckboxChange = (e: any, checked: boolean) => {
    this.setState({ privacyPolicyAccepted: checked });
  };

  onRecatpchaChange = (token: string) => {
    this.setState({ recaptchaChecked: true });
  };

  render() {
    const {
      showPassword,
      privacyPolicyAccepted,
      recaptchaChecked,
      errors,
    } = this.state;

    const inputProps: TextFieldProps = {
      type: 'text',
      margin: 'normal',
      variant: 'outlined',
      fullWidth: true,
    };

    const passwordInputProps = Object.assign({}, inputProps, {
      type: showPassword ? 'text' : 'password',
    });

    const submitDisabled =
      isProduction && (!privacyPolicyAccepted || !recaptchaChecked);

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
                  inputRef={this.form.bind('firstName')}
                  {...inputProps}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Last name"
                  name="lastname"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  inputRef={this.form.bind('lastName')}
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
              inputRef={this.form.bind('email')}
              {...inputProps}
            />
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField
                  label="Password"
                  error={!!errors.password}
                  helperText={errors.password}
                  inputRef={this.form.bind('password')}
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
                  inputRef={this.form.bind('confirmPassword')}
                  {...passwordInputProps}
                />
              </Grid>
            </Grid>
            {isProduction && (
              <div className="form-recaptcha-container">
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={this.onRecatpchaChange}
                />
              </div>
            )}
            <FormControlLabel
              className="form-checkbox-container"
              control={<Checkbox onChange={this.onCheckboxChange} />}
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
                disabled={submitDisabled}
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
