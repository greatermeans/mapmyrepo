const Mark = (function() {
    return class {
      constructor(position, title) {
      	this.position = position
	    this.title = title
	    store.marks.push(this)
      }
    }
}())
