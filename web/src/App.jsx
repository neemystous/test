import { useState } from 'react'
import './App.css'

// Euclidean algorithm to find GCD
function findGCDEuclidean(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [steps, setSteps] = useState([])

  const calculateGCD = () => {
    const n1 = parseInt(num1)
    const n2 = parseInt(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers')
      setSteps([])
      return
    }

    if (n1 === 0 && n2 === 0) {
      setResult('GCD is undefined for (0, 0)')
      setSteps([])
      return
    }

    // Calculate GCD with steps for visualization
    let a = Math.abs(n1)
    let b = Math.abs(n2)
    const stepList = []

    while (b !== 0) {
      const remainder = a % b
      stepList.push(`${a} = ${b} × ${Math.floor(a / b)} + ${remainder}`)
      const temp = b
      b = remainder
      a = temp
    }

    setSteps(stepList)
    setResult(a)
  }

  return (
    <div className="container">
      <section className="gcd-calculator">
        <div className="header">
          <h1>🔢 GCD Calculator</h1>
          <p>Find the Greatest Common Divisor using the Euclidean Algorithm</p>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label htmlFor="num1">First Number:</label>
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
            />
          </div>

          <div className="input-field">
            <label htmlFor="num2">Second Number:</label>
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
            />
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateGCD}>
          Calculate GCD
        </button>

        {result !== null && (
          <div className="result-section">
            <div className="result-box">
              <h2>Result</h2>
              <p className="result-value">
                GCD({num1}, {num2}) = <strong>{result}</strong>
              </p>
            </div>

            {steps.length > 0 && (
              <div className="steps-box">
                <h2>Euclidean Algorithm Steps</h2>
                <ol className="steps-list">
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default App
