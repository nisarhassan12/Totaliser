import React from 'react'
import Output from './Output'
import Controlls from './Controlls';

class Totaliser extends React.Component {

    state = {
        result: 0,
        r1: '',
        r2: '',
        operator: ''
    }

    handleNumber = (number) => {
		number = number.toString()
		
		if (this.state.operator) {
			this.setState(() => ({r2: this.state.r2 + number}))
		}
		else {
			this.setState(() => ({r1: this.state.r1 + number}))
		}
    }

    handleOperator = (operator) => {
		const hack = this.state.result
		if (hack) {
			this.handleClear()
			this.setState(() => ({r1: hack, result: hack}))
		}
        this.setState(() => ({operator}))
    }

    handleResult = () => {
		let result
		let thereAreBoth =  this.state.r1 !== '' && this.state.r2 !== ''
		console.log(thereAreBoth)
       	let r1 = parseFloat(this.state.r1)
		let r2 = parseFloat(this.state.r2)
		let operator = this.state.operator
		if (operator === '+' && thereAreBoth) {
			result = r1 + r2
		}
		else if (operator === '-' && thereAreBoth) {
			result = r1 - r2
		}
		else if (operator === '*' && thereAreBoth) {
			result = r1 * r2
		}
		else if (operator === '/' && thereAreBoth) {
			result = r1 / r2
		}
		else if (operator === '^' && thereAreBoth) {
			result = r1 ** r2
		}
		else if (operator === '%'  && thereAreBoth) {
			result = r1 % r2
		}
		else if (r1) {
			result = r1
		}
		else if (r2) {
			result = r2
		}
		this.setState(() => ({
            result
        }))
    }

    handleClear = () => {
        this.setState(() => ({
            result: null,
            r1: '',
            r2: '',
            operator: '' 
        }))
    }
    
    render() {
        return (
            <main role="application" className="main">

            <div className="totaliser">
                <Output  {...this.state} />
                <Controlls 
                    handleNumber={this.handleNumber} 
                    handleOperator={this.handleOperator}
                    handleResult={this.handleResult} 
                    handleClear={this.handleClear}
                />
            </div>
          </main>   
        )
    }

}

export default Totaliser
