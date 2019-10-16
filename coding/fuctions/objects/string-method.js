let name = "  Surya datta";

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = "abc123jhhh089";

console.log(password.includes("password"));

console.log(name.trim());

function isvalid(password) {
  return password.length < 8 && password.includes("password");
}
console.log(isvalid("adspf"));
