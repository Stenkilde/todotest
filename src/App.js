import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor() {
		super();

		this.state = {
			todos: [],
			completed: []
		}
	}

	componentDidMount() {
		const _API_ = [
			{
				id: 1,
				title: "Make React App",
				completed: false
			},
			{
				id: 2,
				title: "Add backend service",
				completed: false
			},
			{
				id: 3,
				title: "Be Awesome!",
				completed: true
			}
		]

		const arrayNonCompleted = _API_.filter((item) => {
			return item.completed === false
		});

		const arrayCompleted = _API_.filter((item) => {
			return item.completed === true
		});

		this.setState({
			todos: arrayNonCompleted,
			completed: arrayCompleted
		})
	}

	handleClick(todo) {
		const newArray = this.state.todos.filter((item) => {
			return item !== todo;
		})

		this.setState({
			todos: newArray
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Todo list</h1>
				<ul className="list">
					{(() => {
						return (
							this.state.todos.map((todo, index) => {
								return (
									<li onClick={() => this.handleClick(todo)} 
										className="item"
										key={index}>
										{todo.title}
									</li>
								);
							})
						);
					})()}

					{(() => {
						return (
							this.state.completed.map((todo, index) => {
								return (
									<li onClick={() => this.handleClick(todo)} 
										className="item completed"
										key={index}>
										{todo.title}
									</li>
								);
							})
						);
					})()}
				</ul>
			</div>
		);
	}
}

export default App;
