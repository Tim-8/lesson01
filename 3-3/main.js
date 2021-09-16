const step = process.argv[2];

for(let i=1;i<=step;i++){
  for(let j=1;j<=step-i;j++){
    process.stdout.write(" ");
  }
  for(let k=1;k<=i*2-1;k++){
    process.stdout.write("*");
  }
  console.log();
}