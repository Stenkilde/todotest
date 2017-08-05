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
		todo.completed = true;

		const newArray = this.state.todos.filter((item) => {
			return item !== todo;
		})

		const completedArray = this.state.completed;
		completedArray.push(todo);

		this.setState({
			todos: newArray,
			completed: completedArray
		})
	}

	handleDelete(todo, state) {
		if (state === 'todo') {
			const newArray = this.state.todos.filter((item) => { 
				return item !== todo 
			})

			this.setState({
				todos: newArray
			})
		} else {
			const newArray = this.state.completed.filter((item) => {
				return item !== todo
			})

			this.setState({
				completed: newArray
			})
		}
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
									<li className="item"
										key={index}>
										<span onClick={() => this.handleClick(todo)}>{todo.title}</span>
										<button onClick={() => this.handleDelete(todo, 'todo')}>X</button>
									</li>
								);
							})
						);
					})()}
					<h2>Completed</h2>
					{(() => {
						return (
							this.state.completed.map((todo, index) => {
								return (
									<li 
										className="item completed"
										key={index}>
										{todo.title}
										<button onClick={() => this.handleDelete(todo, 'done')}>X</button>
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
