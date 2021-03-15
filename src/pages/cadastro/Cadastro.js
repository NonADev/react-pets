import React, { Component } from "react"
import './Cadastro.css';

export default class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                id: '',
                nome: '',
                especie: '',
                raca: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (evt) {
        let form = this.state.form;
        form[evt.target.name] = evt.target.value;

        this.setState({
            form: form
        });
    }

    render() {
        return (
            <div className="formulario-pet">
                id
                <input type="text" name="id" onChange={this.handleChange}></input>
                nome
                <input type="text" name="nome" onChange={this.handleChange}></input>
                especie
                <input type="text" name="especie" onChange={this.handleChange}></input>
                raça
                <input type="text" name="raca" onChange={this.handleChange}></input>

                <button onClick={()=>this.props.adicionaPet(this.state.form)}>Gravar</button>

                {
                    this.props.props.pets.map((e, index)=> 
                        <p key={index}>{typeof e} x {e.id} - {e.especie} - {e.raca} - {e.nome} </p>
                    )
                }
            </div>
        );
    }
}