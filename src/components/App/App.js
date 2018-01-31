import React, { Component } from 'react';
import './styles/App.css';

import InputButton from '../InputButton/InputButton';

import user from '../../util/user/user.data.js';
import {checkUserAuth} from '../../util/user/checkUserAuth';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      components: {
        input: {
          show: false,
          allowedUser: ['admin'],
        }
      }
    }
  }

  componentWillMount(nextProps) {
    checkUserAuth(this, user)
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.components.input.shown ? true : 
          <InputButton 
            user={user} 
            value="Submit"
          />
        }
      </div>
    );
  }
}

export default App;
