function reposAdapter(user) {
  debugger
  $.ajax({
    url: `https://api.github.com/users/${user}/repos`,
    type: 'get'
  })
  .done(function (response) {
    debugger
    response.forEach()
    // displayRepositories(response)
  })
}
