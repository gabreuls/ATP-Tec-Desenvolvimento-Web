import React, { Component } from 'react';
import { Input, Botao } from '../Cadastro/index';
import firebase from '../../Firebase';
import '../../App.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email:"",
      senha:"",
      msg:""
    }

    this.acessar = this.acessar.bind(this);

   }

   async acessar() {

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(() => {
        window.location.href = "./main";
    })
    .catch((error) => {
      var msgErro = "Usuário/E-mail não cadastrado!"

      this.setState({
        msg: msgErro
      })
    })

   }

  render() {
    return (
      <>
      <h1> Login </h1>
      <div>
        <Input tipo="email" valor={this.state.email} placeHolder="E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
        <Input tipo="password" valor={this.state.senha} placeHolder="Senha" onChange={(e) => this.setState({senha: e.target.value})}/>
        <Botao onClick={this.acessar} texto="Entrar"/>
      </div><br/>
      <label>{this.state.msg}</label>
      </>
    )
  }

}

export default Login;
