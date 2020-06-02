/************************
 * 30. Coding Challenge 5
 */

var jhon = {
  bills: [124, 48, 268, 186, 42],
  tip: [],
  calcTip: function () {
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        this.tip.push(this.bills[i] * 0.2);
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        this.tip.push(this.bills[i] * 0.15);
      } else {
        this.tip.push(this.bills[i] * 0.1);
      }
    }
  },
  addTipToBills: function () {
    for (let i = 0; i < this.tip.length; i++) {
      this.bills[i] += this.tip[i];
    }
  },
};

jhon.calcTip();
console.log("Tips: " + jhon.tip);
console.log("Bills: " + jhon.bills);

jhon.addTipToBills();
console.log("Bills: " + jhon.bills);
