//We can see here the example of using module object e.g module.exports

//Sample variable that we don't want to share
const secret = 'super secret';
//Shareble variables
const person1 = 'john';
const person2 = 'peter';

module.exports = { person1, person2 };
//exports lets you export things inside your local JS code