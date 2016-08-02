const User = (function(){
  var counter = 0

  return class {

    constructor(username, location){
      this.username = username;
      this.location = location;
      this.id = ++counter
      store.users.push(this);
    }

  }
}())
