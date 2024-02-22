function processAges(ages) {
  const doubledAges = []
  for (age of ages){
    doubledAges.push(age*2);
  }
  console.log(doubledAges)
  
  ages.forEach(age => {
    console.log(age);
  });
  
  const adults = ages.filter( age => {
    return age >= 18
  })
  console.log(adults)
  
  const ageStrings = ages.map( age => {
    return JSON.stringify(age)
  })
  console.log(ageStrings)
  return { doubledAges, adults, ageStrings };
}
const ages = [25, 18, 12, 16, 40]
processAges(ages)

module.exports = processAges;
