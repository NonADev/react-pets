import './App.css';
import React from 'react';
import Cadastro from './pages/cadastro/Cadastro';

export default class App extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1,
			pets: []
		}
	}

	adicionaPet(pet) {
		const newPet = {
			id: pet.id,
			nome: pet.nome,
			raca: pet.raca,
			especie: pet.especie
		}
		let pets = this.state.pets;
		pets.push(newPet);
		this.setState({
			pets: pets
		});
	}

	render() {
		return (
			<div>				
				{ this.state.currentStep === 1? <Cadastro adicionaPet={this.adicionaPet.bind(this)} props={this.state}/>: null }
			</div>
		);
	}
}
