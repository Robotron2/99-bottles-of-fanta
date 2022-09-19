var bottles;
var bottlesLeft;
var bottleDisplay = `<p>`;

for (i = 99; i >= 1; i--) {
    if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No bottles of beer on the wall!";
    } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of fanta on the wall!";
    }
    bottleDisplay += `${i}   ${bottles}  of fanta on the wall, </p>`;
    bottleDisplay += `<p> ${i}   ${bottles}  of fanta. Take one down, pass it around,  ${bottlesLeft} </p>`;
    bottleDiv.innerHTML = bottleDisplay;
}
