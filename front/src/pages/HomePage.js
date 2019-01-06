import React, { Component } from 'react';
import {login} from '../components/Api';
// pages
import UsuarioPage from './UsuarioPage';
import LoginPage from './LoginPage';
import { isAutenticado, setAutenticado } from '../utils/LoginManager';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {aut:isAutenticado(), erros:null};

    
  }

  render() {
    return (<UsuarioPage />);
  }
}

export default HomePage;


