export function separator( heading='' ) {
  let str = "";
  for (let i = 0; i <= 30; i++) {
    str += "-";
  }
  str += heading;
  for (let i = 0; i <= 30; i++) {
    str += "-";
  }
  console.log(str);
}