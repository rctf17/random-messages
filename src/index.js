const messages=[
    "Nat",
    "Pato",
    "Sudikey",
    "Evely,",
    "Mati",
    "Koke",
    "David",
    "Doris",
    "Aris",
    "Heber",
    "Javier"
];

const randomMsg = () =>{
    const message = messages[Math.floor((Math.random() * messages.length))];
    console.log(message);
};

module.exports = { randomMsg };
