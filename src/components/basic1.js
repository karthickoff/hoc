import React, { Component } from 'react';
import DisplayName from './displayName';
export class Basic1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name1: '',
        }
        this.changeName = this.changeName.bind(this);
    }
    changeName(e) {
        this.setState({ [e.target.name]: [e.target.value] })

    }
    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <lable>Name: </lable>
                <input type='text' placeholder="Enter y------our Name" id='username' name='Name1' value={this.state.Name1} onChange={this.changeName} />
                <div>
                    <DisplayName name={this.state.Name1} age='32' />
                </div>
            </div>
        )
    }
}

export default Basic1;