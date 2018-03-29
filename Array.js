var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var num = 0;
var c;
var num1 = 0;
var c1;
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
        if (a[i] == a[j]) {
            num++;
            c = a[i];
        }
    }
    if (num > num1) {
        num1 = num;
        c1 = c;
    }
    num = 0;
}
console.log("出现次数最多的是" + c1 + "共出现了" + num1 + "次");
