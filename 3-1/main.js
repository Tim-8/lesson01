for (let i = 1;i<10;i++)
{
  for (let j =1;j<10;j++)
  {
    process.stdout.write(String(i*j));
    process.stdout.write("\t");
  }
  console.log();
}