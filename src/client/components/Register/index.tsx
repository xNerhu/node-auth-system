import * as React from 'react';
import {
  Typography,
  TextField,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextFieldProps } from '@material-ui/core/TextField';

const { RECAPTCHA_SITE_KEY } = process.env;

interface State {
  remember: boolean;
}

export default class Register extends React.Component<{}, State> {
  public state: State = {
    remember: false,
  };

  public onCheckbox = (event: any) => {
    this.setState({ remember: event.target.checked });
  };

  render() {
    const { remember } = this.state;

    const inputProps: TextFieldProps = {
      className: 'userform-textfield',
      margin: 'normal',
      variant: 'filled',
    };

    return (
      <div className="userform-container">
        <form className="userform" style={{ width: 512 }}>
          <Typography variant="h6">Register</Typography>
          <FormControl className="userform-fieldset" component="fieldset">
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField label="First name" {...inputProps} />
              </Grid>
              <Grid item xs>
                <TextField label="Last name" {...inputProps} />
              </Grid>
            </Grid>
            <TextField label="Username" name="username" {...inputProps} />
            <TextField label="Email" name="email" {...inputProps} />
            <TextField label="Password" type="password" {...inputProps} />
            <TextField
              label="Confirm password"
              type="password"
              {...inputProps}
              style={{ marginBottom: 32 }}
            />
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} />
            <div
              className="userform-submit-container"
              style={{ marginTop: 24 }}
            >
              <FormControlLabel
                className="userform-control-label"
                value="end"
                control={
                  <Checkbox checked={remember} onChange={this.onCheckbox} />
                }
                label="I have accepted the Terms of Use & Privacy Policy"
                labelPlacement="end"
              />
              <Button className="userform-submit" color="primary">
                register
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
