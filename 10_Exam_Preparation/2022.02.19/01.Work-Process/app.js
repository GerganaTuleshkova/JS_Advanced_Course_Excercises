function solve() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let addWorkerButton = document.getElementById('add-worker');
    let tableBody = document.getElementById('tbody');
    let budgetElement = document.getElementById('sum');



    addWorkerButton.addEventListener('click', addWorker);

    function addWorker(event) {
        event.preventDefault();

        if (fname.value != ''
            && lname.value != ''
            && email.value != ''
            && birth.value != ''
            && position.value != ''
            && salary.value != ''
        ) {

            let workerObj = {
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                birth: birth.value,
                position: position.value,
                salary: Number(salary.value)
            }

            let workerTr = document.createElement('tr');
            workerTr.innerHTML = `\
            <td>${fname.value}</td>\
            <td>${lname.value}</td>\
            <td>${email.value}</td>\
            <td>${birth.value}</td>\
            <td>${position.value}</td>\
            <td>${salary.value}</td>\
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
            `;
            tableBody.appendChild(workerTr);

            let currentBudget = Number(budgetElement.textContent);
            let salaryAmount = workerObj.salary;

            budgetElement.textContent = (currentBudget + salaryAmount).toFixed(2)

            let [fireButton, editButton] = workerTr.querySelectorAll('button');
            fireButton.addEventListener('click', fireWorker);
            editButton.addEventListener('click', editWorker);

            fname.value = '';
            lname.value = '';
            email.value = '';
            birth.value = '';
            position.value = '';
            salary.value = '';

            function fireWorker(event) {
                workerTr.remove();
                let currentBudget = Number(budgetElement.textContent);

                budgetElement.textContent = (currentBudget - workerObj.salary).toFixed(2)
            }

            function editWorker(event) {
                workerTr.remove();
                fname.value = workerObj.fname;
                lname.value = workerObj.lname;
                email.value = workerObj.email;
                birth.value = workerObj.birth;
                position.value = workerObj.position;
                salary.value = workerObj.salary;

                let currentBudget = Number(budgetElement.textContent);

                budgetElement.textContent = (currentBudget - workerObj.salary).toFixed(2);
            }
        }
    }
}

solve()
