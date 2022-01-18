export async function getUserInfo(id, callBack) {
  console.log("start");
  let first = await fetch(`http://localhost:3000/users?userId=${id}`);
  let res = await first.json();
  console.log(res);
  callBack(res);
}
