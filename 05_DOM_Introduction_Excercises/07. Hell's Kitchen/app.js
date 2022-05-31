function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurantsObj = {};
      let bestRestaurant;
      let highestAverageSalary = 0;
      let highestSalaryOfBest = 0;

      for (let restInfo of input) {
         let [restaurantName, workers] = restInfo.split(' - ');
         workers = workers.split(', ');


         if (!restaurantsObj.hasOwnProperty(restaurantName)) {
            restaurantsObj[restaurantName] = {};
         }
         for (let workerInfo of workers) {
            let [workerName, salary] = workerInfo.split(' ');
            restaurantsObj[restaurantName][workerName] = Number(salary);
         }
      }


      for (let r in restaurantsObj) {
         let highestSalary = 0
         let totalSalary = 0;
         let salaryCount = 0;
         for (let workerSalary of Object.values(restaurantsObj[r])) {
            totalSalary += workerSalary;
            salaryCount += 1;
            if (workerSalary > highestSalary) {
               highestSalary = workerSalary;
            }
         }

         let averageSalaray = totalSalary / salaryCount;
         if (averageSalaray > highestAverageSalary) {
            highestAverageSalary = averageSalaray;
            bestRestaurant = r;
            highestSalaryOfBest = highestSalary;
         }

      }

      document.querySelector('#outputs p').textContent =
         `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${highestSalaryOfBest.toFixed(2)}`

      let wrokersText = [];
      let bestRWorkers = []

      for (let workersInfo of Object.entries(restaurantsObj[bestRestaurant])) {
         bestRWorkers.push((workersInfo))
      }
      let sortedArray = bestRWorkers.sort((a, b) => b[1] - a[1])

      for (let el of sortedArray) {
         wrokersText.push(`Name: ${el[0]} With Salary: ${el[1]}`)
      }

      document.querySelector('#workers p').textContent = wrokersText.join(' ')

   }
}
