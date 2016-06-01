//Variables

var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]

//Amy and Nick solution

ages.forEach(function(age){ // for each age in ages --
  console.log(age); //log each age in ages through the loop
  var allowedToWatch = []; //create an empty array to hold the output
  var i = 0; //variable to hold counter to be incremented.

  ratings.forEach(function(rating){ //nested forEach, check against each age in ages

    if(minAgeForRating[i] <= age) { //check if minimum age for rating is less than or equal to age
      allowedToWatch.push(rating);
    }
    i++; //increment counter
  })

  console.log(allowedToWatch); //log the values of the allowed to watch array
})




//Jess Solution

var ratingsAllowed = ages.map(function(age) {
  return ratings.filter(function(rating, index){
    return age >= rating[index];
  });
});

ages.forEach(function(age, index){
  console.log('Age' + age + ' is allowed to see: ' + ratingsAllowed[index].toString())
})
