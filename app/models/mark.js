const Mark = (function() {
    return class {
      constructor(position, title, user) {
      	this.position = position
	    this.title = title
      this.user = user
	    store.marks.push(this)
      }
    }
}())
