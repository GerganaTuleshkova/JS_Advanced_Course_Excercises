function solve() {
   let parentDivElement = document.getElementsByClassName('shopping-cart')[0];
   let texAreaElement = document.querySelector('textarea');
   // clear the text area
   texAreaElement.value ='';
   let checkoutButtonElement = document.querySelector('.checkout');

   // object that keeps the products and the total price per product
   let productsPurchased = {};

   parentDivElement.addEventListener('click', onAddClick, true);
   checkoutButtonElement.addEventListener('click', onCheckoutClick);

   function onAddClick(event) {
      if (event.target.className == 'add-product') {
         //get the product name
         let productName = event.target.parentElement.parentElement
         .querySelector('.product-details')
         .querySelector('.product-title').textContent;
         // get the product price
         let productPrice = Number(event.target.parentElement.parentElement
         .querySelector('.product-line-price').textContent);

         // create the output text
         let text = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         // add the output text to textarea
         texAreaElement.value += text;
         
         // add the procut and the total price for that product to the object
         if (!productsPurchased[productName]) {
            productsPurchased[productName] = 0;
         }
         productsPurchased[productName] += productPrice;
      }
   }

   function onCheckoutClick(event) {
      let productsList = [];
      let totalPrice = 0;
      
      // get the products names and add them to list; product keys are unique
      // get the total cost for product and calculate the total price to be paid
      for (let [productName, productTotalPrice] of Object.entries(productsPurchased)) {
         productsList.push(productName);
         totalPrice += productTotalPrice;
      }

      
      let textToBeAdded = `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`
      // append the text to textarea
      texAreaElement.value += textToBeAdded;

      // disable all buttons
      let buttons = Array.from(document.querySelectorAll('button'))
      buttons.forEach(b => b.disabled = true);
   }
}