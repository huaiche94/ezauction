import React from 'react';
import { Table, Row, Col, Input } from 'reactstrap';

export default class MainPageTable extends React.Component {
	constructor() {
		super();

		this.state = {
			keyword: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log("The form was submitted with the following data:");
		console.log(this.state);
	}

	render() {
		return (
			<React.Fragment>
				<Row style={{display: 'flex', justifyContent: 'center'}}>
				<Col sm = '1'><h5>search box</h5></Col>
				<Col sm = '5'>
				<form onSubmit={this.handleSubmit} className="FormFields">	
					<div className="FormField">
						<Input
							type="text"
							id="keyword"
							placeholder="Search for anything"
							name="keyword"
							value={this.state.keyword}
							onChange={this.handleChange}
						/>
					</div>
				</form>
				</Col>
				</Row>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Item Name</th>
						<th>By User</th>
						<th>Post Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>LA laker's Jersey</td>
						<td>Lebron J.</td>
						<td>2018/12/20</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>NTU hoodie</td>
						<td>NTU123</td>
						<td>2018/12/5</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Sth else</td>
						<td>kkkk2115</td>
						<td>2018/12/10</td>
					</tr>
				</tbody>
			</Table>
			</React.Fragment>
		);
	}
}