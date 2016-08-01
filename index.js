// // function getRepositories() {
// // 	event.preventDefault()
// // 	const username = $('#username').val()
// // 	document.getElementById('query').reset()
// // 	$.ajax({
// //         url: `https://api.github.com/users/${username}/repos`,
// //         type: 'get'
// //     })
// //     .done(function (response) {
// //         displayRepositories(response)
// //     })
// // }
// 
// function displayRepositories(repos) {
// 	var string = $("#repositories-template").html();
// 	var template = Handlebars.compile(string);
// 	var repoList = template(repos)
// 	$('#repositories').html(repoList)
// }
//
// function getCommits(el) {
// 	let name = el.dataset.repo
// 	let user = el.attributes["repo-owner"].value
// 	$.ajax({
//         url: `https://api.github.com/repos/${user}/${name}/commits`,
//         type: 'get'
//     })
//     .done(function (response) {
//         displayCommits(response)
//     })
// }
//
// function displayCommits(commits) {
// 	const commitList = `<ul>${commits.map(c => '<li>' + c.commit.author.name + ' - ' + c.commit.author.email
// 		+ ' - ' + c.commit.message + '</li>').join('')}</ul>`
// 	document.getElementById('details').innerHTML = commitList
// }
//
// function getBranches(el) {
// 	let name = el.dataset.repo
// 	let user = el.attributes["repo-owner"].value
// 	$.ajax({
//         url: `https://api.github.com/repos/${user}/${name}/branches`,
//         type: 'get'
//     })
//     .done(function (response) {
//         displayBranches(response)
//     })
// }
//
// function displayBranches(branches) {
// 	const branchList = `<ul>${branches.map(b => '<li>' + b.name + '</li>').join('')}</ul>`
// 	document.getElementById('details').innerHTML = branchList
// }
//
// function getUserDetails(argument) {
//     $.ajax({
//         url: 'https://api.github.com/users/JaredCubilla',
//         type: 'get'
//     })
//     .done(function (response) {
//         let location = response.location
//     })
// }
//
// // function getUserLocation(user) {
// // 	$.ajax({
// // 		url: `https://api.github.com/repos/${user}/${name}/contributors`
// // 		type: 'get'
// // 	})
// // 	.done(function (response){
// // 		let location = response.location
// // 		// take location and geocode to get coordinates to plot
// // 		// plot on google maps
// // 	})
// // }
