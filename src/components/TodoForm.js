import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(){
	    super();
	    this.state = {
	      	title: '',
			responsible: '',
			description: '',
			priority: ''
	    };
	    this.handleInput = this.handleInput.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(ev){
		const {value, name} = ev.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(ev){
		ev.preventDefault();
		console.log(this.props);
		this.props.onAddTodo(this.state);
	}

	render(){
	    return (
	    	<div className="card">
	    		<form className="card-body" onSubmit={this.handleSubmit}>
	    			<div className="form-group">
	    				<input
	    					type="text"
	    					name="title"
	    					className="form-control"
	    					placeholder="Titulo"
	    					onChange={this.handleInput}
	    				/>
	    			</div>
	    			<div className="form-group">
	    				<input
	    					type="text"
	    					name="responsible"
	    					className="form-control"
	    					placeholder="Responsable"
	    					onChange={this.handleInput}
	    				/>
	    			</div>
	    			<div className="form-group">
	    				<input
	    					type="text"
	    					name="description"
	    					className="form-control"
	    					placeholder="Descripción"
	    					onChange={this.handleInput}
	    				/>
	    			</div>
	    			<div className="form-group">
	    				<select
	    					name="priority"
	    					className="form-control"
	    					onChange={this.handleInput}>
	    					<option>Baja</option> 						
	    					<option>Media</option>
	    					<option>Alta</option>
	    				</select>
	    			</div>
	    			<button type="submit" className="btn btn-primary">Guardar</button>
	    		</form>

	    	</div>
	      
	    );
	}
  
}

export default TodoForm;
