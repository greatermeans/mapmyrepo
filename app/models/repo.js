const Repo = (function(){
  var counter = 0

  return class {

    constructor(name, url, contributors_url){
      this.name = name;
      this.url = url;
      this.contributors_url = contributors_url
      this.contributors = []
      this.id = ++counter
      store.repos.push(this)
      // contributorsAdapter(contributors_url)
    }





  }
}())
