var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
var removeItem = function(array, item) {
  var element = array.indexOf(item);
  if (element === -1) {
    console.log("No such element exists in the array.")
  } else {array.splice(element, 1)
  console.log( `removing ${item}.`)};
};

removeItem(stuff, "sky");
removeItem(stuff, "food");

var letterS = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(letterS);

var letterL = [];
for (var item of stuff) {
  if (item.includes("l")) {
    letterL.push(item);
  }
}
console.log(letterL);


