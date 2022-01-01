function main() {
  return new Promise( resolve => {
    resolve(4);
  });
}

async function f(){
    console.log(2);
    let r = await main();
    console.log(r);
}

console.log(1);
f();
console.log(6);