let i = 1;

while (i <= 100) {
  console.log(i % 15 ? (i % 5 ? (i % 3 ? i : "fizz") : "buzz") : "fizzbuzz");
  i = i + 1;
}
