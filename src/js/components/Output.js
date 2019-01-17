import React from 'react'
import img from '../../img/more.svg'


const Output = ({result, r1, r2, operator}) => (
    <div className="totaliser__output">
        <img src={img} className="action" />   
        <div className="output--main">&nbsp;{result && <span>{result}</span> || 0}</div>
        <div className="output--sub"> &nbsp;{r1} {operator} {r2}</div>
    </div>
)

export default Output