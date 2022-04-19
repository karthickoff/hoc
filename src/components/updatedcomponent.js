import React from 'react';

const UpdatedComponent = (OriginalComponent) => {


    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                first: '',
                second: '',
                Add: '',
                third: '',
                fourth: '',
                btnAdd: '',
            }
            this.handleOnchange = this.handleOnchange.bind(this);
            this.handleOnfocus = this.handleOnfocus.bind(this);
            this.handleButtonClick = this.handleButtonClick.bind(this);


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
        handleButtonClick() {
            var c = this.state.third
            var d = this.state.fourth
            if (c && d) {
                this.setState({ btnAdd: parseInt(c) + parseInt(d) })
            }
        }
        render() {
            return <OriginalComponent first={this.state.first} second={this.state.second} third={this.state.third} fourth={this.state.fourth} handleOnchange={this.handleOnchange} handleOnfocus={this.handleOnfocus} Add={this.state.Add} btnAdd={this.state.btnAdd} handleButtonClick={this.handleButtonClick} />


        }
    }
    return NewComponent
}
export default UpdatedComponent;