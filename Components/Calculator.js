import { Component } from 'react';

export default class Calculator extends Component{

    constructor(){
        super()
        this.state = {
            result: ""
        }
    }

    onDigit = (digit) => {
        let expresion = "";
        let size = this.state.result.length -1;

        if((this.state.result[size] === "+" || this.state.result[size] === "-"
            || this.state.result[size] === "/" || this.state.result[size] === "*") 
            && (digit === "+" || digit === "-" || digit === "/" || digit === "*")){

            expresion = this.state.result

        }else{

            expresion = this.state.result + digit;
        }
        
        if(this.state.result[0] === 0 || this.state.result[0] === "0" ){

            if( size == 1){
                expresion = "0"
            }
            expresion = expresion.substr(1);
        }
        
        this.setState({
            result: expresion 
        })
    }
    excuteOperator = () => {
        const resultado = eval(this.state.result)
        this.setState({ result: resultado})
    }

    render(){
        const { result } = this.state;
        
        return (
            <div className="calculator-body">
                <div className="z-depth-2 grey darken-1 white-text center-align result">
                    <h1 className="right-align">{result === "" ? "0": result}</h1>
                </div>
                <div className="calc-container grey lighten-2 hoverable z-depth-2">
                    <div className="content-buttons">
                        <div className="buttons-number">
                            {
                                ["0","1","2","3","4","5","6","7","8","9","."].map (digit => {
                                    return (
                                        <a className="waves-effect waves-light btn grey btn-large" onClick={ () => this.onDigit(digit) }>{digit}</a>
                                    )
                                })
                            }
                        </div>
                    
                    <div className="operators center-align">
                            {
                                ["+","-","/","*"].map (digit => {
                                    return (
                                        <a className="waves-effect waves-light btn grey btn-large" onClick={ () => this.onDigit(digit) }>{digit}</a>
                                    )
                                })
                            }
                            <a className="waves-effect waves-light btn grey btn-large" onClick={ () => this.setState({result:""}) }>C</a>
                        </div>
                    </div>
                    <div className="enter">
                        <a className="waves-effect waves-light btn grey btn-large bottom " onClick={ this.excuteOperator }>Enter</a>
                    </div>
                </div>
                
                <style jsx>
                    {
                        `
                            .result{
                                width: 490px;
                                margin: auto;
                                font-size: 20px;
                                font-family: 'Quantico', sans-serif;
                                overflow-x: auto;
                                
                            }
                            .calc-container{
                                width:490px;
                                margin: 0 auto;
                                text-aling:center;
                                padding: 38px;
                            }
                            .calc-container a {
                                margin: 5px
                            }
                            .operators{
                                width:200px;
                            }
                            h1 {
                                padding: .7rem;
                                overflow-y: hidden;
                                overflow-x: scroll;
                                text-align: right;
                                white-space: nowrap;
                                margin-bottom: 0px !important;
                                margin-top: 10px !important;
                            }
                            ::-webkit-scrollbar {
                                width: 10px;
                            }
                            ::-webkit-scrollbar-track {
                                background: #757575; 
                            }
                            
                            /* Handle */
                            ::-webkit-scrollbar-thumb {
                                background: #888; 
                            }

                            /* Handle on hover */
                            ::-webkit-scrollbar-thumb:hover {
                                background: #555; 
                            }
                            .content-buttons{
                                display:flex;
                                
                            }
                            .buttons-number{
                                width:250px;
                            }
                            .enter{ 
                            display: flex;
                            justify-content: flex-end;

                            }
                        `
                    }
                </style>
            </div>
        )
    }
}
