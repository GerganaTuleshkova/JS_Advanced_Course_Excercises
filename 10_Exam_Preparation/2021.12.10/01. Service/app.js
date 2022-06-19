window.addEventListener("load", solve);
function solve() {
  let typeProduct = document.getElementById('type-product');
  let description = document.getElementById('description');
  let clientName = document.getElementById('client-name');
  let clientPhone = document.getElementById('client-phone');
  let submitButton = document.querySelector('form').querySelector('button');
  let receivedOrders = document.getElementById('received-orders');
  let completedOrders = document.getElementById('completed-orders');
  let clearButton = completedOrders.querySelector('button');


  submitButton.addEventListener('click', submit);
  clearButton.addEventListener('click', clearRepairForms);

  function submit(event) {
    event.preventDefault();

    if (description.value
      && clientName.value
      && clientPhone.value) {

      let repairForm = document.createElement('div');
      repairForm.className = 'container';
      repairForm.innerHTML = `\
      <h2>Product type for repair: ${typeProduct.value}</h2>\
      <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>\
      <h4>Description of the problem: ${description.value}</h4>\
      <button class="start-btn">Start repair</button>\
      <button class="finish-btn" disabled>Finish repair</button>`;

      receivedOrders.appendChild(repairForm);

      // typeProduct.value = '';
      description.value = '';
      clientName.value = '';
      clientPhone.value = '';

      let [startRepairButton, finishRepairButton] = Array.from(repairForm.querySelectorAll('button'));
      startRepairButton.addEventListener('click', startRepair);
      finishRepairButton.addEventListener('click', finishRepair);
    }

  }

  function startRepair(event) {
    event.target.disabled = true;
    event.target.nextSibling.disabled = false;
  }

  function finishRepair(event) {
    let currentRepairFrom = event.target.parentElement;
    Array.from(currentRepairFrom.querySelectorAll('button')).forEach(button => button.remove());
    completedOrders.appendChild(currentRepairFrom);
  }

  function clearRepairForms(event) {
    Array.from(completedOrders.querySelectorAll('div')).forEach(div => div.remove());
  }
}