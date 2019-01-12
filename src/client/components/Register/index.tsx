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

    return (
      <div className="user-form-container">
        <form className="user-form" style={{ width: 512 }}>
          <Typography variant="h6">Register</Typography>
          <FormControl className="user-form-fieldset" component="fieldset">
            <Grid spacing={32} container>
              <Grid item xs>
                <TextField
                  className="user-form-textfield"
                  label="First name"
                  margin="normal"
                  variant="filled"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  className="user-form-textfield"
                  label="Last name"
                  margin="normal"
                  variant="filled"
                />
              </Grid>
            </Grid>
            <TextField
              className="user-form-textfield"
              label="Username"
              name="username"
              margin="normal"
              variant="filled"
            />
            <TextField
              className="user-form-textfield"
              label="Email"
              name="email"
              margin="normal"
              variant="filled"
            />
            <TextField
              className="user-form-textfield"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
              margin="normal"
              variant="filled"
            />
            <TextField
              className="user-form-textfield"
              label="Confirm password"
              type="password"
              name="password"
              autoComplete="password"
              margin="normal"
              variant="filled"
            />
            <div
              className="user-form-submit-container"
              style={{ marginTop: 24 }}
            >
              <FormControlLabel
                className="user-form-control-label"
                value="end"
                control={
                  <Checkbox checked={remember} onChange={this.onCheckbox} />
                }
                label="I have accepted the Terms of Use & Privacy Policy"
                labelPlacement="end"
              />
              <Button className="user-form-submit" color="primary">
                register
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
