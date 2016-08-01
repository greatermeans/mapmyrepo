const store = {
  users: [],
  repos: [],
  maps: [],
  markers: []
}

function initiate(event) {
  usersController.setup(event)
  usersController.getOwner()
  usersController.getRepos()
}

