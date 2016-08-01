const Mark = (function() {
    return class {
      constructor(position, map, title) {
      	  this.position = position
	      this.map = map
	      this.title = title
	      map.markers.push(this)
      }
    }
}())
