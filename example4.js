//Hobbies
function findAllHobbyists(hobby, hobbies) {
  // Write the code that goes here
  var keys = Object.keys(hobbies);
  var values = Object.values(hobbies);
  let hobbyists = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i].includes(hobby)) {
      hobbyists.push(keys[i]);
    }
  }
  return hobbyists;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};
console.log(findAllHobbyists("Yoga", hobbies)); // ['Chad']
