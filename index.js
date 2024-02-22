function processAges(ages) {
  //Task1:
  const doubledAges = [];
  for (let age of ages){
    doubledAges.push(age*2);
  };
  console.log(doubledAges);
  //Task2:
  ages.forEach( (age) => {
    console.log(age);
  });
  //Task3:
  const adults = ages.filter( (age) => {
    return age >= 18;
  });
  console.log(adults);
  //Task4:
  const ageStrings = ages.map( (age) => {
    return age.toString();
  })
  console.log(ageStrings);
  return { doubledAges, adults, ageStrings };
}
const ages = [25, 18, 12, 16, 40];
processAges(ages);

module.exports = processAges;
