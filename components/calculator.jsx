import React, { useState } from 'react'

export default () => {
  const [firstVal, setFirstVal] = useState('')
  const [secondVal, setSecondVal] = useState('')
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')
  const [alert, setAlert] = useState('')

  const calculate = () => {
    if (((!Number(firstVal) && Number(firstVal) !== 0) || (!Number(secondVal) || (operator = '/' && secondVal === 0)))) {
      setAlert('Please Check Your Operands')

    } else {
      setAlert('')
      switch (operator) {
        case '+':
          setAnswer(Number(firstVal) + Number(secondVal))
          break;
        case "-":
          setAnswer(firstVal - secondVal)
          break
        case "*":
          setAnswer(firstVal * secondVal)
          break
        case "/":
          setAnswer(firstVal / secondVal)
          break
        case "?":
          setFirstVal = ''
          setSecondVal = ''
          break
      }
    }
  }
  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input type="textbox" onChange={(event) => { setFirstVal(event.target.value) }} value={firstVal} />
      <select id="operation" onChange={(event) => { setOperator(event.target.value) }} value={operator}>
        <option operation="?">?</option>
        <option operation="+">+</option>
        <option operation="-">-</option>
        <option operation="*">*</option>
        <option operation="/">/</option>
      </select>
      <input type="textbox" onChange={(event) => { setSecondVal(event.target.value) }} value={secondVal} />
      <button type="button" id="button" onClick={() => { calculate(firstVal, secondVal) }}>=</button>
      <input type="textbox" value={answer} disabled />
      <div id="alert"> {alert} </div>
    </div>
  )

}