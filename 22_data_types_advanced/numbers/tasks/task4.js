
// This loop is infinite, why??
let i = 0;
while (i != 10) {
  console.log(i)
  i += 0.2;
}
// Because i never equals 10 it goes to 9.999999999 and then 10.1999999999999, that happens because of precision loss

