$(document).ready(function(){
//this line above always goes at the top//

	// $("a")click(doSomething();

	// function doSomething(){
	// 	event.preventDefault();
	// enter what you want it to do here
	// } //


//Read more on click push content down and show more text and change text to show less//
$('#1 .readmore').click(expandReadMore);
function expandReadMore(event){
	event.preventDefault();
	$('#1 .extra').slideToggle();
	$('#1 .readless').removeClass('hide');
	$('#1 .readmore').addClass('hide');
}

$('#1 .readless').click(collapseReadMore);
function collapseReadMore(event){
	event.preventDefault();
	$('#1 .extra').slideToggle();
	$('#1 .readless').addClass('hide');
	$('#1 .readmore').removeClass('hide');
}

$('#2 .readmore').click(expandReadMore2);
function expandReadMore2(event){
	event.preventDefault();
	$('#2 .extra').slideToggle();
	$('#2 .readless').removeClass('hide');
	$('#2 .readmore').addClass('hide');
}

$('#2 .readless').click(collapseReadMore2);
function collapseReadMore2(event){
	event.preventDefault();
	$('#2 .extra').slideToggle();
	$('#2 .readless').addClass('hide');
	$('#2 .readmore').removeClass('hide');
}

//Psuedo code: Read less on click hides/pushes content up and shows less text and change text to read more//
//Learn more on click push content down and show more text and change text to show less//

$('.learnmore').click(expandLearn);
function expandLearn(){
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$('.learnmore').addClass('hide');
}





















//this closes the $(document) line at top//
	});