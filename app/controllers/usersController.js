var usersController = (function() {

  function setup(event) {
    event.preventDefault()
  }

  function getOwner() {
    let user = $('#username').val()
    usersAdapter(user)
  }

  function getRepos() {
    let user = $('#username').val()
    $('#query')[0].reset()
    return repoArr = reposAdapter(user)
  }

  // function createRepos(repoArr) {
  //   repoArr.forEach(function (r) {
  //     debugger
  //     new Repo (r.name,r.html_url,r.contributors_url)
  //   })
  // }

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
