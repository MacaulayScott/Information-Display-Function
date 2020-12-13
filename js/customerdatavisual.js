
var data = {

    first_name: 'macaulay',
    last_name: 'scott',
    age: '23',
    gender: 'male',
    ip_adress: '192.567.879.12.2',
    country: 'England',
    password: '*************',
    DOB: '06/10/1997'
};


function retrieveUserData(data) {
    let firstName = data.first_name;
    let lastName = data.last_name;
    let age = data.age;
    let gender = data.gender;
    let ip = data.ip_adress;
    let country = data.country;
    let password = data.password;
    let birthday = data.DOB;

    const infoExtraction = `first Name : ${firstName}\n last Name : ${lastName}\n age : ${age}\n gender : ${gender}\n IP adress : ${ip}\n country : ${country}\n password : ${password}\n D.O.B : ${birthday}`;
     console.log(infoExtraction);
};

retrieveUserData(data)