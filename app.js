const store = {
  users: [],
  repos: [],
  maps: [],
  marks: []
}

function initiate(event) {
  usersController.setup(event)
  usersController.getOwner()
  usersController.getRepos()
}

var contributors
var repo

function gatherContributors(event,self) {
	event.preventDefault()
	repo = (store.repos.filter(function (r) {
		return (parseInt(self.id)) === r.id
	}))[0]

	contributors = contributorsAdapter(repo)
	setTimeout(convertContributors, 150)
	setTimeout(mapLocations, 200)
}

function convertContributors () {
	contributors.responseJSON.forEach(function(contributor) {
		repo.contributors.push(usersAdapter(contributor.login))
	})
}

function mapLocations() {
	mapsController.create()
	mapsController.show()
	repo.contributors.forEach(function(contributor) {
		geocoderAdapter(contributor.location)
	})
	setTimeout(mapsController.setAllMarkers, 200)
}
