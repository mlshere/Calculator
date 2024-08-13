import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [results, setResults] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);  

    const handleNumberClick = (num: string) => {
        if (displayValue === '0' || waitingForOperand) {
            setDisplayValue(num);
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorClick = (nextOperator: string) => {
        if (operator && !waitingForOperand) {
            const newValue = evaluate();
            setDisplayValue(String(newValue));
            setResults(newValue);
        } else {
            setResults(parseFloat(displayValue));
        }
        setOperator(nextOperator);
        setWaitingForOperand(true);
    };

    const handleDecimalClick = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setResults(null);
        setOperator(null);
        setWaitingForOperand(false);
    };  

    const handleEqualClick = () => {
        if (operator && !waitingForOperand) {
            const newValue = evaluate();
            setDisplayValue(String(newValue));
            setResults(null);
            setOperator(null);
            setWaitingForOperand(true);
        }
    };

    const evaluate = () => {
        const currentValue = results || 0;
        const inputValue = parseFloat(displayValue);

        switch (operator) {
            case '+':
                return currentValue + inputValue;
            case '-':
                return currentValue - inputValue;
            case '*':
                return currentValue * inputValue;
            case '/':
                return currentValue / inputValue;
            default:
                return inputValue;    
        }
    }

    return (
        <div className="calculator bg-gray-800 max-w-sm mx-auto mt-10 p-4 rounded-lg shadow-lg">
            <div id="display" className="bg-black text-white text-right p-4 text-2xl">
                {displayValue}
            </div>
            <div className="grid grid-cols-4 gap-2">
                <button id="zero" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('0')}>0</button>
                <button id="one" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('1')}>1</button>
                <button id="two" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('2')}>2</button>
                <button id="three" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('3')}>3</button>
                <button id="four" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('4')}>4</button>
                <button id="five" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('5')}>5</button>
                <button id="six" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('6')}>6</button>
                <button id="seven" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('7')}>7</button>
                <button id="eight" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('8')}>8</button>
                <button id="nine" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleNumberClick('9')}>9</button>
                <button id="add" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleOperatorClick('+')}>+</button>
                <button id="subtract" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleOperatorClick('-')}>-</button>
                <button id="multiply" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleOperatorClick('*')}>*</button>
                <button id="divide" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={() => handleOperatorClick('/')}>/</button>
                <button id="decimal" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={handleDecimalClick}>.</button>
                <button id="clear" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={handleClearClick}>AC</button>
                <button id="equals" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1" onClick={handleEqualClick}>=</button>
            </div>
        </div>
    );
}

export default Calculator;