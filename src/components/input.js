import React, { Component } from 'react'
import UpdatedComponent from './updatedcomponent'
import "../styles/input.css";
class Input extends Component {

    render() {
        const { first, second, Add, handleOnchange, handleOnfocus, third, fourth, btnAdd, handleButtonClick } = this.props
        return (
            <div className='container'>
                <h3>Hoc Concept</h3>

                <div className='row'>
                    <div className=' area' >
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
                    <div className='area2'>
                        <label>first Num</label>
                        <input type="text" name='third' className='thirdNum' placeholder="enter value" value={third} onChange={handleOnchange} /> <br />
                        <label>second Num</label>
                        <input type="text" name='fourth' className='fourthNum' placeholder="enter value" value={fourth} onChange={handleOnchange} /> <br />
                        <div>
                            <button className='btn btn-primary' onClick={handleButtonClick}>click</button>
                            <input value={btnAdd} className='result2'></input> <br />

                        </div>

                    </div>
                </div>



            </div>
        )
    }
}
export default UpdatedComponent(Input);
