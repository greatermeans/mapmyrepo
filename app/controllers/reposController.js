var reposController = (function () {


  function displayRepositories() {
  	var string = $("#repositories-template").html();
  	var template = Handlebars.compile(string);
  	var repoList = template(store.repos)
  	$('#repositories').html(repoList)
  }

  return {
  	displayRepositories
  }


}())