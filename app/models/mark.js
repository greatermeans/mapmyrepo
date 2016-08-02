const Mark = (function() {
    return class {
      constructor(position, title) {
      	this.position = position
	    this.title = title
      this.user = {}
	    store.marks.push(this)
      }
    }
}())
