// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } 

enum Role {ADMIN, READ_ONLY, AUTHOR};  //We can also declare ADMIN = 5 or ADMIN = 'ADMIN'

const person = {
    name: 'Srikanth',
    age: 25,
    hobbies: ['Sports', 'cooking'], //this of type array of strings string[]. 
    // role: [1, 'Author']  //example of tuple.
    role: Role.ADMIN
};

//tuple size is fixed and data types are also, we cann't change them
// person.role.push('arya'); //It will not show any error but tuple does not take it.
// person.role[1] = 10;

//explicitly adding one element
let favoriteActivities: string[]; //if we want to have any data type in array we use any[].
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
    // console.log(hobby.toUpperCase);
}

console.log(person.role);

//enums
if(person.role === Role.ADMIN){
    console.log("is Admin");
}