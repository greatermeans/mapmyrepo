const store = {
  user: []
  repo: []
}

$(document).on('ready', function(){
  $('form').on('submit', function(event){
    usersController(event);
  });
})

const User = (function(){
  var counter = 0

  return class {

    constructor(username){
      this.username = username;
      this.location = '';
      this.id = counter++
      store.user.push(this);
    }
    classrooms(){
      // filter
    }
  }
}())
