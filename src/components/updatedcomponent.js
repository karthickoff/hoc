import React from 'react';

const UpdatedComponent = (OriginalComponent) => {


    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                first: '',
                second: '',
                Add: ''
            }
            this.handleOnchange = this.handleOnchange.bind(this);
            this.handleOnfocus = this.handleOnfocus.bind(this);

        }
        handleOnchange(e) {
            console.log("-------------rrrrrrrrrr--------", [e.target.name], [e.target.value]);
            this.setState({ [e.target.name]: [e.target.value] })

        }
        handleOnfocus() {
            console.log("--------focus");
            var a = this.state.first
            var b = this.state.second
            console.log(a + b);
            if (a && b) {
                this.setState({ Add: parseInt(a) + parseInt(b) })

            }
        }
        render() {
            return <OriginalComponent first={this.state.first} second={this.state.second} handleOnchange={this.handleOnchange} handleOnfocus={this.handleOnfocus} Add={this.state.Add} />


        }
    }
    return NewComponent
}
export default UpdatedComponent;