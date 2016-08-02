function contributorsAdapter(repo){
	var link = `${repo.contributors_url}?client_id=a432b03ce51ad3748ee7&client_secret=a387664d21ca23473f3ff5c77102a2767d5098e3`
  	return ($.ajax({
      url: link,
      type: 'get'
    })
    .done(function (contributors) {
    	return contributors.responseJSON
      }))
}
