const User = (function(){
  var counter = 0

  return class {

    constructor(username, location, url){
      this.username = username;
      this.location = location;
      this.id = ++counter
      this.url = url
      store.users.push(this);
    }

  }
}())
