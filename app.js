const store = {
  users: [],
  repos: [],
  map: "",
  marks: []
}

function initiate(event) {
  usersController.setup(event)
  usersController.getOwner()
  usersController.getRepos()
}

var contributors
var repo
var user

function gatherContributors(event,self) {
  event.preventDefault()
	store.users = []
	event.preventDefault()
	store.marks = []
	repo = (store.repos.filter(function (r) {
		return (parseInt(self.id)) === r.id
	}))[0]
  $('#repo-title').html(`${repo.name}`)
	contributors = contributorsAdapter(repo)
	setTimeout(convertContributors, 150)
	setTimeout(mapLocations, 1000)
}

function convertContributors () {
	contributors.responseJSON.forEach(function(contributor) {
		usersAdapter(contributor.login)
	})
}

function mapLocations() {
	mapsController.create()
	mapsController.show()
	store.users.forEach(function(user) {
			geocoderAdapter(user)
	})
	setTimeout(mapsController.setAllMarkers, 2000)
}
