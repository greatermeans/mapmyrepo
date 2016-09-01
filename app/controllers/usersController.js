var usersController = (function() {

  function setup(event) {
    store.repos = []
    store.users = []
    $('#repo-title').empty()
    event.preventDefault()
  }

  function getOwner() {
    let user = $('#username').val()
    usersAdapter(user) // WHY DO WE WANT THIS HERE? DO we need to make an API call to the owner apart from getting his repos?
  }

  function getRepos() {
    let user = $('#username').val()
    $('#query')[0].reset()
    return repoArr = reposAdapter(user)
  }

  return {
    getOwner,
    getRepos,
    setup
  }

}())
