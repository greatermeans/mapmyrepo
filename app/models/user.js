const store = {
  user: [],
  repo: [],
  contributors: []
}

$(document).on('ready', function(){
  $('form#query').on('submit', function(event){
    usersController(event);
  });
})

const User = (function(){
  var counter = 0

  return class {

    constructor(username, location){
      this.username = username;
      this.location = location;
      this.id = counter++
      store.user.push(this);
    }

  }
}())
