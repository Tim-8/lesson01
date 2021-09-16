let vertical = process.argv[2];
let horizontal = process.argv[3];

for (let i = 1;i<=vertical;i++){
  if(i%2==1){
    for (let j =1;j<=horizontal;j++){
      if(j%2==1){
      process.stdout.write("*");
      }else{
      process.stdout.write("-");
      }
    }
  }else{
    for (let j =1;j<=horizontal;j++){
      if(j%2==1){
      process.stdout.write("-");
      }else{
      process.stdout.write("*");
      }
    }
  }
  console.log();
}