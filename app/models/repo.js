const Repo = (function(){
  var counter = 0

  return class {

    constructor(name, url, contributors){
      this.name = name;
      this.url = url;
      this.contributors = contributors;
      this.id = counter++
      store.repos.push(this);
    }

  }
}())
