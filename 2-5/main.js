const money1 = process.argv[2];

const money2 = parseInt(money1/100);
const money3 = parseInt(money1%100/10);
const money4 = parseInt(money1%10);

console.log(`100円玉${money2}枚, 10円玉${money3}枚, 1円玉${money4}枚`);
