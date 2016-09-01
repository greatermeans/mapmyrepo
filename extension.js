var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(script);

function changeColor(element, color_choice) {
  element.css('color', color_choice)
}

$('.container').append('<form id="color"><input type="text"> <input type="submit"> </form>')

$(document).ready( function(event){
  event.preventDefault()
  $('#color').submit(changeColor($('.container'), 'red')
)
})

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});
