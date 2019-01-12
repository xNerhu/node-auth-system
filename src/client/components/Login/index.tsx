import * as React from 'react';
import {
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './styles.scss';

interface State {
  remember: boolean;
}

export default class Login extends React.Component<{}, State> {
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
        <form className="user-form">
          <Typography variant="h6">Log in</Typography>
          <FormControl className="user-form-fieldset" component="fieldset">
            <TextField
              className="user-form-textfield"
              label="Username/Email"
              type="email"
              name="email"
              autoComplete="email"
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
            <Link component="button">Forgot password?</Link>
            <div className="user-form-submit-container">
              <FormControlLabel
                value="end"
                control={
                  <Checkbox checked={remember} onChange={this.onCheckbox} />
                }
                label="Remember me"
                labelPlacement="end"
              />
              <Button className="user-form-submit" color="primary">
                login
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
