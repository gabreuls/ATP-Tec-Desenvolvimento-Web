import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link } from 'react-router-dom';
import '../../App.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNascimento: ""

        }
    }

    async componentDidMount() {

        await firebase.auth().onAuthStateChanged( async (user) => {
            
            if(user) {
                var uid = user.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {

                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        dataNascimento: retorno.data().dataNascimento
                    })
                });
            }
        });
    }

    render() {

        const { dataNascimento } = this.state;

        return(
            <div>
                <h1>Dados Cadastrados</h1>
                <div>
                    Nome: {this.state.nome} <br/>
                    Sobrenome: {this.state.sobrenome} <br/>
                    Data de Nascimento: {dataNascimento ? dataNascimento.split('-').reverse().join('/'): 'Carregando...'}
                </div>
            </div>
        )
    }
}

export default Main;