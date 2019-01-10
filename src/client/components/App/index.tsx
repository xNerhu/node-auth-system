import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const test = true;
const SITE_KEY = test ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' : '';

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
        <ReCAPTCHA sitekey={SITE_KEY} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
