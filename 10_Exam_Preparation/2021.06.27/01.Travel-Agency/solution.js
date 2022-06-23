window.addEventListener('load', solution);

function solution() {
  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');
  let submitButton = document.getElementById('submitBTN');
  let previewSection = document.getElementById('infoPreview');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');
  let info = document.getElementById('block');

  submitButton.addEventListener('click', submit);

  function submit(event) {
    if (fullName.value != '' && email.value != '') {

      let orderObj = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        code: code.value,
      }

      previewSection.innerHTML = `\
    <li>Full Name: ${orderObj.fullName}</li>\
    <li>Email: ${orderObj.email}</li>\
    <li>Phone Number: ${orderObj.phone}</li>\
    <li>Address: ${orderObj.address}</li>\
    <li>Postal Code: ${orderObj.code}</li>\
    `
      fullName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      code.value = '';
      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;

      editButton.addEventListener('click', edit);
      continueButton.addEventListener('click', continueResv);

      function edit(event) {
        fullName.value = orderObj.fullName;
        email.value = orderObj.email;
        phone.value = orderObj.phone;
        address.value = orderObj.address;
        code.value = orderObj.code;

        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
        previewSection.innerHTML = '';
      }

      function continueResv(event) {
        info.innerHTML = `<h3>Thank you for your reservation!</h3>`;
      }
    }
  }
}
