function processAges(ages) {
  //Task1:
  const doubledAges = [];
  for (let age of ages){
    doubledAges.push(age*2);
  };
  //Task2:
  ages.forEach( (age) => {
    console.log(age);
  });
  //Task3:
  const adults = ages.filter( (age) => {
    return age >= 18;
  });
  //Task4:
  const ageStrings = ages.map( (age) => {
    return age.toString();
  })
  return { doubledAges, adults, ageStrings };
}
const ages = [25, 18, 12, 16, 40];
const result = processAges(ages)
console.log(result);

module.exports = processAges;
