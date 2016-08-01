function initiate(event) {
  usersController.setup(event)
  usersController.getOwner()
  usersController.getRepos()
}

const store = {
  users: [],
  repos: [],
  maps: [],
  markers: []
}


//
// $('document').on('ready')
//   mapsController()
