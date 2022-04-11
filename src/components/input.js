import React, { Component } from 'react'
import UpdatedComponent from './updatedcomponent'
import "../styles/input.css";
class Input extends Component {

    render() {
        const { first, second, Add, handleOnchange, handleOnfocus } = this.props
        return (
            <div>
                <h3>Hoc Concept</h3>


                <div className='area' >
                    <div>
                        <label>First Number   </label>
                        <input type="text" name='first' placeholder="Enter first num " onChange={handleOnchange} value={first} className="FirstNum" />
                    </div>
                    <div>
                        <label>second Number    </label>


                        <input type="text" name='second' placeholder="Enter second num " onChange={handleOnchange} value={second} className="SecondNum" />
                    </div>
                    <div>
                        {first && second ? <label>{first} + {second} </label> : ""}
                        <input onFocus={handleOnfocus} value={Add} className="result" />

                    </div>
                </div>
            </div>
        )
    }
}
export default UpdatedComponent(Input);
