function initiate(event) {
  usersController.setup(event)
  usersController.getOwner()
  usersController.getRepos()
}

const store = {
  user: [],
  repo: [],
  map: {},
  markers: []
}


//
// $('document').on('ready')
//   mapsController()
