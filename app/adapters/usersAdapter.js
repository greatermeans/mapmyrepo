function usersAdapter(user){
  debugger
  $.ajax({
      url: `https://api.github.com/users/${user}`,
      type: 'get'
    })
    .done(function (response) {
      debugger
      return new User(response.login, response.location)
    })
}
