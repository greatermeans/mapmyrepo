var reposController = (function () {


  function displayRepositories() {
  	var string = $("#repositories-template").html();
  	var template = Handlebars.compile(string);
  	var repoList1 = template(store.repos.slice(0, 7))
    var repoList2 = template(store.repos.slice(8, 15))
    var repoList2 = template(store.repos.slice(16, 23))
    $('#repositories1').empty()
    $('#repositories2').empty()
    $('#repositories3').empty()
  	$('#repositories1').html(repoList1)
    $('#repositories2').html(repoList2)
    $('#repositories3').html(repoList1)
  }

  return {
  	displayRepositories
  }


}())
