function findUserByUsername(usersArray, username) {
  return usersArray.find(function(value){return value.username === username})
}

function removeUser(usersArray, username) {
  let input = usersArray.findIndex(function(value){return value.username === username});
  if(input === -1) return;
  return usersArray.splice(input, 1)[0]
}