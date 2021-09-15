const money = process.argv[2];

const hundred = parseInt(money/100);
const ten = parseInt(money%100/10);
const one = parseInt(money%10);

console.log(`100円玉${hundred}枚, 10円玉${ten}枚, 1円玉${one}枚`);
