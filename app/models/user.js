const User = (function(){
  var counter = 0

  return class {

    constructor(username, location, avatar){
      this.username = username;
      this.location = location;
      this.id = ++counter
      this.avatar = avatar
      store.users.push(this);
    }

  }
}())
