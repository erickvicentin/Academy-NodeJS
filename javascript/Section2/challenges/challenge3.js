bill = [124, 48, 268];
tip = [];

function calculateTip(bill) {
  if (bill < 50) {
    tip.push(bill * 0.2);
  } else if (bill >= 50 && bill <= 200) {
    tip.push(bill * 0.15);
  } else {
    tip.push(bill * 0.1);
  }
}

calculateTip(bill[0]);
calculateTip(bill[1]);
calculateTip(bill[2]);

bill[0] += tip[0];
bill[1] += tip[1];
bill[2] += tip[2];

console.log(tip);
console.log(bill);
