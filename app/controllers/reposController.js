function reposController(event){
  event.preventDefault();


  function displayRepositories(repos) {
  	var string = $("#repositories-template").html();
  	var template = Handlebars.compile(string);
  	var repoList = template(repos)
  	$('#repositories').html(repoList)
  }


}


// function getRepositories(username) {
//   $.ajax({
//     url: `https://api.github.com/users/${username}/repos`,
//     type: 'get'
//   })
//   .done(function (response) {
//     displayRepositories(response)
//   })
// }
