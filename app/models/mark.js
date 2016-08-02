const Mark = (function() {
    return class {
      constructor(position, title,avatar) {
      	this.position = position
	    this.title = title
	    this.avatar = avatar
	    store.marks.push(this)
      }
    }
}())
