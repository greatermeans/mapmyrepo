var usersController = (function() {

  function setup(event) {
    event.preventDefault()
  }

  function getOwner() {
    const user = $('#username').val()
    document.getElementById('query').reset()
    debugger
    usersAdapter(user)
  }

  function getRepos() {
    debugger
    reposAdapter(store.users[0].username)
  }

  // getRepositories(store.users[store.users.length - 1].username)

  // function getRepositories(username) {
  //   $.ajax({
  //     url: `https://api.github.com/users/${username}/repos`,
  //     type: 'get'
  //   })
  //   .done(function (response) {
  //     displayRepositories(response)
  //   })
  // }
  //
  // function displayRepositories(repos) {
  // 	var string = $("#repositories-template").html();
  // 	var template = Handlebars.compile(string);
  // 	var repoList = template(repos)
  // 	$('#repositories').html(repoList)
  // }

return {getOwner, getRepos, setup}

}())
