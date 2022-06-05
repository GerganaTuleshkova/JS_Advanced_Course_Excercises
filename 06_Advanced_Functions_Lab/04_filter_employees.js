function filterEmployees(string, criteria) {
    let data = JSON.parse(string);

    if (criteria == "all") {
        print(data)
    } else {
        let [criteriaProp, criteriaValue]  = criteria.split('-');
        print(data.filter(e => e[criteriaProp] == criteriaValue));
    }


    function print(result) {
        for (let i = 0; i < result.length; i++) {
            console.log(`${i}. ${result[i]['first_name']} ${result[i]['last_name']} - ${result[i]['email']}`);
        }
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)