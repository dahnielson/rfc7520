export function assertEqual (result, expected, name) {
  const test = result === expected
  const assertDiv = document.createElement('div')
  assertDiv.classList.add(test ? 'pass' : 'fail')
  const assertHeader = document.createElement('h2')
  assertHeader.textContent = test ? `PASS: ${name}` : `FAIL: ${name}`
  assertDiv.appendChild(assertHeader)
  if (!test) {
    const resultHeader = document.createElement('h3')
    resultHeader.textContent = "Result"
    assertDiv.appendChild(resultHeader)
    const resultDiv = document.createElement('div')
    resultDiv.textContent = result
    assertDiv.appendChild(resultDiv)
    const expectedHeader = document.createElement('h3')
    expectedHeader.textContent = "Expected"
    assertDiv.appendChild(expectedHeader)
    const expectedDiv = document.createElement('div')
    expectedDiv.textContent = expected
    assertDiv.appendChild(expectedDiv)
  }
  document.body.appendChild(assertDiv)
}
