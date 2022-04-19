import React, { Component } from 'react'

export default class DisplayName extends Component {
    constructor(props) {
        super(props)


    }
    render() {

        return (
            <div>
                <h3>Displayin user names</h3>
                <p>User name is  {this.props.name} </p>
                <p>user age is {this.props.age}</p>
            </div>
        )
    }
}
