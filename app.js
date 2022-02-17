const errorText = document.querySelector('.error-text')
const tipAmountValue = document.querySelector('.tip-amount-value')
const perPersonValue = document.querySelector('.per-person-value')
const errorBorder = document.getElementById('no-people')
const form = document.getElementById('input-fields')

function calcTip(factor, evt) {
  var customValue = Number(document.getElementById('custom').value / 100)
  var noPeople = Number(document.getElementById('no-people').value)

  if (noPeople === 0) {
    errorFunc()
  } else {
    if (customValue > 0) {
      printTip(customValue, noPeople)
    } else {
      printTip(factor, noPeople)
    }
  }
}

function errorFunc() {
  errorText.textContent = "Can't be zero"
  errorText.style.color = 'red'
  errorText.style.paddingLeft = '3.5rem'
  errorBorder.style.border = '2px solid red'
  console.log('error code run')
}

function resetError() {
  errorBorder.style.border = 0
  errorBorder.setAttribute('class', 'input-fields')
  errorText.textContent = ''
}

function printTip(factor, noPeople) {
  var bill = Number(document.getElementById('total-bill').value)
  var billPerPerson = bill / noPeople
  var tipPerPerson = bill * factor
  var totalPerPerson = billPerPerson + tipPerPerson
  resetError()

  printResult(totalPerPerson, tipPerPerson)
}

function printResult(totalPerPerson, tipPerPerson) {
  perPersonValue.textContent = '$' + totalPerPerson.toFixed(2)
  tipAmountValue.textContent = '$' + tipPerPerson.toFixed(2)
}

function reset() {
  perPersonValue.textContent = '$0.00'
  tipAmountValue.textContent = '$0.00'
  form.reset()
}

function clear() {
  console.log('code activated')
  var custom = document.getElementById('custom')
  custom.reset()
}

function setResult() {}
