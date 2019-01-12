import * as React from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const { RECAPTCHA_SITE_KEY } = process.env;

class App extends React.Component {
  onChange = async (token: string) => {
    if (token == null) {
      throw new Error('Invalid reCAPTCHA response');
    }

    const json = await axios.post('/auth/recaptcha', { token });
    console.log(json.data);
  };

  render() {
    return (
      <div>
        Hello World!
        <button>aha</button>
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
