var reposController = (function () {


  function displayRepositories() {
  	var string = $("#repositories-template").html();
  	var template = Handlebars.compile(string);
  	var repoList1 = template(store.repos.slice(0, 9))
    var repoList2 = template(store.repos.slice(10, 19))
  	$('#repositories1').html(repoList1)
    $('#repositories2').html(repoList2)
  }

  return {
  	displayRepositories
  }


}())
