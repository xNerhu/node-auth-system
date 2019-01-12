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
import { TextFieldProps } from '@material-ui/core/TextField';

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

    const inputProps: TextFieldProps = {
      className: 'userform-textfield',
      margin: 'normal',
      variant: 'filled',
    };

    return (
      <div className="userform-container">
        <form className="userform">
          <Typography variant="h6">Log in</Typography>
          <FormControl className="userform-fieldset" component="fieldset">
            <TextField
              label="Username/Email"
              type="email"
              name="email"
              autoComplete="email"
              {...inputProps}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
              {...inputProps}
            />
            <Link component="button">Forgot password?</Link>
            <div className="userform-submit-container">
              <FormControlLabel
                value="end"
                control={
                  <Checkbox checked={remember} onChange={this.onCheckbox} />
                }
                label="Remember me"
                labelPlacement="end"
              />
              <Button className="userform-submit" color="primary">
                login
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}
