function reposAdapter(user) {
  $.ajax({
    url: `https://api.github.com/users/${user}/repos?client_id=a432b03ce51ad3748ee7&client_secret=a387664d21ca23473f3ff5c77102a2767d5098e3`,
    type: 'get'
  })
  .done(function (response) {
    response.forEach(function (r) {
      	new Repo (r.name,r.html_url,r.contributors_url)
      })
  })
}


