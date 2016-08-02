var reposController = (function () {


  function displayRepositories() {
  	var string = $("#repositories-template").html();
  	var template = Handlebars.compile(string);
  	var repoList = template(store.repos)
  	$('#repositories').empty()
  	$('#repositories').html(repoList)
  }

  return {
  	displayRepositories
  }


}())