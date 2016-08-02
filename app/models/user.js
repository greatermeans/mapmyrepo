const User = (function(){
  var counter = 0

  return class {

    constructor(username, location, url, avatar){
      this.username = username;
      this.location = location;
      this.id = ++counter
      this.url = url
      this.avatar = avatar
      store.users.push(this);
    }

  }
}())
