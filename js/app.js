// 1.   Foydalanuvchi haqida ma'lumot chiqaruvchi funksiya

const user = {
    name: "Ali",
    age: 25
}

function getUserInfo(user) {
    console.log(`Foydalanuvchi ismi: ${user.name}, yoshi: ${user.age} yosh`);


}
getUserInfo(user);



// 2.   Narxga soliq qo'shuvchi funksiya

const product = {
    name: "Telefon",
    price: 1000
}

product.priceWithTaxi = product.price + product.price * 12 / 100;


function addTax(product) {
    console.log(product);

}
addTax(product);



// 3.  Mashina haqida ma'lumot beruvchi funksiya

const car = {
    model: "Cobalt",
    year: 2022,
    color: "oq"
}

function carInfo(car) {
    console.log(`Bu ${car.color} rangli ${car.model}. ${car.year}-yil`);

}
carInfo(car)


// 4.   email maydonga qarab true yoki false qaytarsin

const userr = {
    name: "Ali",
    email: "ali@gmail.com"
}

function hasEmail(obj, key) {
    if (key in obj) {
        return true;
    } else {
        return false
    }

}
console.log(hasEmail(userr, "email"));



// 5.  Ishchilar ro'yhatidan maoshlar yig'indisini toping

const employees = [
    {
        name: "Ali",
        salary: 10000
    },

    {
        name: "Vali",
        salary: 15000
    },
    {
        name: "Karim",
        salary: 20000
    }
]

function getTotalSalary(employees) {
    return (employees[0].salary + employees[1].salary + employees[2].salary);
}

console.log(getTotalSalary(employees));




// 6.  O'rtacha tezlikni hisoblash

const carr = {
    model: "Cobalt",
    distance: 150,
    time: 3
}

carr.speed = carr.distance / carr.time;

function calculateSpeed(carr) {
    return carr;
}

console.log(calculateSpeed(carr));




// 7. Ishchi haftalik ish soatlari 

const worker = {
    name: "Ali",
    start: 9,
    end: 18
}


function calculateWorkTime(worker) {
    worker.hoursWorked = worker.end - worker.start;
    console.log(worker);

}
calculateWorkTime(worker);




// 8. Kubning hajmini topish

const cube = {
    side: 4
}
function calculateVolume(cube) {
    cube.Volume = cube.side ** 3;
    console.log(cube);

}
calculateVolume(cube);




// 9.  Parol tekshiruvchi funksiya

const user1 = {
    username: "test",
    password: "12345678",
    isStrong: true
}

function isPasswordStrong(user1) {
    if (user1.password.length >= 8) {
        return isStrong = true;
    } else {
        return isStrong = false;
    }

}

console.log(isPasswordStrong(user1));




// 10.  Tug'ilgan yilni hisoblash

const person = {
    name: "Ali",
    age: 20
}

const currentYear = 2025;


function calculateBirthYear(person) {
    person.birthYear = currentYear - person.age;
    console.log(person);

}

calculateBirthYear(person);





// 11 Muzlatilgan obyektda o'zgartirish qilish

const userx = Object.freeze({
    name: "Ulug'bek",
    age: 20
});

function updateUser(userx) {
    userx.hobby = "football"
    if (Object.isFrozen) {
        console.log("Object is frozen");
    } else {
        console.log("Not frozen");
    }
}










// 12.    Obyekt muzlatilganligini tekshirish

const user0 = {
    name: "Ulug'bek",
    age: 20
}

function updateUser(user0) {
    Object.freeze(user0)
    if (Object.isFrozen(user0)) {
        console.log("Frozen");

    } else {
        console.log("Not frozen");

    }
}

updateUser(user0);





// 13. Yopilgan obyektda yangi key qo'shish

const person1 = {
    name: "Ali"
}
Object.seal(person1);

function addProperty(obj, key, value) {
    if (Object.isSealed(obj)) {
        return "Cannot add new property";
    } else {
        obj[key] = value;
        return obj;
    }
}


console.log(addProperty(person1, "age", 25));




// 14. Obyektni Sealed yoki yo'qligini tekshirish 

const phone = {
    brand: "iPhone"
}

function isItSealed(phone) {
    if (Object.isSealed(phone)) {
        return "Sealed"
    } else {
        return "Not sealed"
    }
}

console.log(isItSealed(phone));






// 15.  Berilgan property obyekt ichida mavjudmi

const book = {
    title: "JS Fundamentals",
    author: "Mirzo"
}

function checkProperty(obj, key) {
    if (key in obj) {
        return true;
    } else {
        return false;
    }
};

console.log(checkProperty(book, "title"));
console.log(checkProperty(book, "color"));



// 16.   Faqat o'ziga tegishli propertyni tekshirish


const parent2 = {
    name: "Parent"
}
const child = Object.create(parent2);
child.age = 10;


function isOwnKey(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return true
    } else {
        return false
    }
}



console.log(isOwnKey(child, "age"));
console.log(isOwnKey(child, "name")); 
