import { Component, useState } from "react";
import './Calculator.css'
import image1 from "../../../assests/image/png/squareRoot.png"

const Calculator = () => {
    const [screen, setScreen] = useState("");
    const [result, setResult] = useState(0);
    const [sign, setSign] = useState("");
    const [number, setNumber] = useState("");
    const [showButtons, setShowButtons] = useState(false);



    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };

    const submitNumericValue = (event) => {
        const value = event.target.value;
        setScreen(screen + value);
        setNumber(number + value);
        console.log(number);
    }

    const handleArithmetics = (event) => {
        const sign = event.target.value;
        setSign(sign);
        setScreen(screen + sign);
        setResult(number);
        setNumber("");
    }

    const handleResult = () => {
        var finalResult = 0;
        if (sign == "+") {
            console.log(result, number);
            finalResult = Number(result) + Number(number);
        }
        else if (sign == "-") {
            console.log(result, number);
            finalResult = Number(result) - Number(number);
        }
        else if (sign == "X") {
            console.log(result, number);
            finalResult = Number(result) * Number(number);
        }
        else if (sign == "/") {
            console.log(result, number);
            finalResult = Number(result) / Number(number);
        }
        else if (sign == "sin") {
            console.log(result, number);
            finalResult = Number(0) +  Number(number);
            finalResult = Math.sin(parseFloat(finalResult))
        }
        else if (sign == "tan") {
            console.log(result, number);
            finalResult = Number(0) +  Number(number);
            finalResult = Math.tan(parseFloat(finalResult))
        }
        else if (sign == "cos") {
            console.log(result, number);
            finalResult = Number(0) +  Number(number);
            finalResult = Math.cos(parseFloat(finalResult))
        }
        else if (sign == "log") {
            console.log(result, number);
            finalResult = Number(0) +  Number(number);
            finalResult = Math.log(parseFloat(finalResult))
        }
        else if (sign == "(") {
            var newNum = ""
            console.log(result, number);
            for(let i = 0; i<number.length;i++){
                if(number.charAt(i)!=")")
             newNum += number.charAt(i)
            }
            finalResult = Number(result) *  Number(newNum);
        }
        setScreen(finalResult);
        }

    const reset = () => {
        setScreen("");
        setSign("");
        setResult(0);
        setNumber(0);
    }

    return (
        <div className="background">
            <div className="everything">
                <div className="header1">
                    <h1 id="header">C</h1>
                    <h1>alculator</h1>
                </div>
                <div className="displayBoard"><p>{screen}</p></div>
                <div className="firstContainer">
                    <input type='button' value="AC" onClick={reset} id="on"></input>
                    <input type="button" value="+/-" onClick={""} id="plusAndMinus"></input>
                    <input type="button" value="%" onClick={""} id="modolus"></input>
                    <input type="button" value="/" onClick={(e) => handleArithmetics(e)} id="division"></input>

                </div>
                <div className="secondContainer">
                    <input type="button" value="9" onClick={(e) => submitNumericValue(e)} id="nine"></input>
                    <input type='button' value="8" onClick={(e) => submitNumericValue(e)} id="eight"></input>
                    <input type='button' value="7" onClick={(e) => submitNumericValue(e)} id="seven"></input>
                    <input type="button" value="X" onClick={(e) => handleArithmetics(e)} id="times"></input>
                </div>
                <div className="thirdContainer">
                    <input type="button" value="6" onClick={(e) => submitNumericValue(e)} id="six"></input>
                    <input type='button' value="5" onClick={(e) => submitNumericValue(e)} id="five"></input>
                    <input type='button' value="4" onClick={(e) => submitNumericValue(e)} id="four"></input>
                    <input type='button' value="-" onClick={(e) => handleArithmetics(e)} id="minus"></input>
                </div>
                <div className="fourthContainer" >
                    <input type="button" value="1" onClick={(e) => submitNumericValue(e)} id="three"></input>
                    <input type='button' value="2" onClick={(e) => submitNumericValue(e)} id="two"></input>
                    <input type='button' value="3" onClick={(e) => submitNumericValue(e)} id="one"></input>
                    <input type="button" value="+" onClick={(e) => handleArithmetics(e)} id="plus"></input>
                </div>
                <div className="fifthContainer" >
                    <input type="button" value="0" onClick={(e) => submitNumericValue(e)} id="zero"></input>
                    <input type='button' value="." onClick={""} id="dot"></input>
                    <input type='button' value="=" onClick={handleResult} id="equals"></input>
                </div>
                <div>
                    <button onClick={handleButtonClick} id="toggle">^</button>
                    {showButtons && (
                        <div>
                        <div className="sixthContainer">
                            {<button value="sin" onClick={(e) => handleArithmetics(e)}>sin</button>}
                            {<button value="cos" onClick={(e) => handleArithmetics(e)}>cos</button>}
                            {<button value="tan" onClick={(e) => handleArithmetics(e)}>tan</button>}
                            {<button value="log" onClick={(e) => handleArithmetics(e)}>log</button>}
                        </div>
                        <div className="seventhContainer">
                            {<button value="(" onClick={(e) => handleArithmetics(e)}>(</button>}
                            {<button value=")"onClick={(e) => submitNumericValue(e)} >)</button>}
                            {<button value="" onClick={(e) => handleArithmetics(e)} id= "squareRoot"><img src={image1}></img></button>}
                            {<button value="sin" onClick={(e) => handleArithmetics(e)}></button>}
                        </div>
                        </div>
                        
                    )}
                </div>
            
            </div>
            </div>
            )
    }

            export default Calculator