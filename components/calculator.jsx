import React, { useState } from 'react'

export default () => {
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')
  const [operator, setOperator] = useState('+')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  const isValidCalculation = () => !Number.isNaN(Number(firstOperand)) &&
    !Number.isNaN(Number(secondOperand)) &&
    firstOperand !== '' &&
    secondOperand !== ''

  const calculateAnswer = () => {
    if (!isValidCalculation()) {
      setAnswer('')
      return setError('Please provide a valid number for both operands')
    }

    setError('')
    setAnswer('')

    switch (operator) {
      case '+':
        return setAnswer(Number(firstOperand) + Number(secondOperand))
      case '-':
        return setAnswer(Number(firstOperand) - Number(secondOperand))
      case '*':
        return setAnswer(Number(firstOperand) * Number(secondOperand))
      case '/':
        return setAnswer(Number(firstOperand) / Number(secondOperand))
      default:
        return setError('Please choose a valid operator')
    }
  }

  return (
    <div className="calculator">
      <div className="title">React Calculator</div>
      <div className="form">
        <input
          type="text"
          name="firstOperand"
          value={firstOperand}
          onChange={event => setFirstOperand(event.target.value)}
        />
        <select name="operator" value={operator} onChange={event => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          name="secondOperand"
          value={secondOperand}
          onChange={event => setSecondOperand(event.target.value)}
        />
        <button type="button" aria-label="equals" onClick={calculateAnswer}>=</button>
        <input value={answer} disabled />
      </div>
      <div className="error">{error}</div>
    </div>
  )
}
