import React, { Component } from 'react';
import firebase from '../../Firebase';
import '../../App.css';

class Cadastro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email:"",
      senha:"",
      nome:"",
      sobrenome:"",
      dataNascimento:""
    }

    this.salvarDados = this.salvarDados.bind(this);

  }

  async salvarDados() {

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then( async (retorno) => {

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      });

      window.location.href = "/login";

    })


  }

  render() {

    return (
      <>
      <h1> Cadastro </h1>
      <div>
        <Input tipo="email" valor={this.state.email} placeHolder="E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
        <Input tipo="password" valor={this.state.senha} placeHolder="Senha" onChange={(e) => this.setState({senha: e.target.value})}/>
        <Input tipo="text" valor={this.state.nome} placeHolder="Nome" onChange={(e) => this.setState({nome: e.target.value})}/>
        <Input tipo="text" valor={this.state.sobrenome} placeHolder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})}/>
        <Input tipo="date" valor={this.state.dataNascimento} placeHolder="Data de Nascimento" onChange={(e) => this.setState({dataNascimento: e.target.value})}/>
        <Botao onClick={this.salvarDados} texto="Cadastrar"/>
      </div>
      </>
    )
  }

}

export default Cadastro;

export const Input = (props) => {
  return(
    <form>
      <input 
        type={props.tipo}
        value={props.valor}
        onChange={props.onChange}
        placeholder={props.placeHolder}
      />
    </form>
  )
}

export const Botao = (props) => {
  return(
    <button onClick={props.onClick}> {props.texto} </button>
  )
}