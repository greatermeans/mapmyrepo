function usersAdapter(user){
	var link = `https://api.github.com/users/${user}?client_id=a432b03ce51ad3748ee7&client_secret=a387664d21ca23473f3ff5c77102a2767d5098e3`
  	$.ajax({
      url: link,
      type: 'get'
    })
    .done(function (response) {
      new User(response.login, response.location, response.html_url, response.avatar_url)
    })
}
