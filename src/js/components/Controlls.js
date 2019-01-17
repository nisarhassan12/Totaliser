import React from 'react'

const Controlls = ({ handleNumber, handleOperator, handleResult, handleClear }) => (
    <div className="totaliser__controlls">
        <button 
            className="btn"
            onClick={() => {
                handleClear()
            }} 
        >
            AC
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('%')
            }}
        >
            %
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('^')
            }}
        >
            ^
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('/')
            }}
        >
            /
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(7)
            }}
        >
            7
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(8)
            }}
        >
            8
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(9)
            }}
        >
            9
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('*')
            }}
        >
            *
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(4)
            }}
        >
            4
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(5)
            }}
        >
            5
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(6)
            }}
        >
            6
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('+')
            }}
        >
            +
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(1)
            }}
        >
            1
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(2)
            }}
        >
            2
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(3)
            }}
        >
            3
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleOperator('-')
            }}
        >
            -
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber(0)
            }}
        >
            0
        </button>
        <button 
            className="btn"
            disabled
        >
            &nbsp;
        </button>
        <button 
            className="btn"
            onClick={() => {
                handleNumber('.')
            }}
        >
            .
        </button>            
        <button 
            className="btn"
            onClick={() => {
                handleResult()
            }}
        >
            =
        </button>
    </div>
)

export default Controlls