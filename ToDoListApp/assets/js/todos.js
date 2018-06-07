// Striking off a task (vice-versa)
$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
});

// Deleting a task (when the delete button is clicked on )
$("ul").on("click","span",function(event){

	// <li> to fade out and whole row to be removed
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	// Stop the bubbling of events 
	event.stopPropagation();

})


// Recording a new task #1: via "Enter" in the textbox
$("input[type='text']").keypress(function(event){

	// When "Enter" is detected in the input box
	if(event.which === 13){
		// Get the text in the input box
		var toDoTask = $(this).val();
		// Clear the text from the input box
		$(this).val("");
		// Create a new <li> with the new task
		$("ul").append("<li><span><i class='fa fa-minus-square'></i></span> " + toDoTask + "</li>")
	}

});


// // Recording a new task #2: via clicking "Submit" 
// $("button[type='submitButton']").click(function(event){

// 	// if the textbox is not empty...
// 	if($("input[type='text']").val() != ""){

// 		var toDoTask = $("input[type='text']").val();

// 		// Create a new <li> with the new task
// 		$("ul").append("<li><span>X<span>" + toDoTask + "</li>")
// 		// Clear the textbox
// 		$("input[type='text']").val("");


// 	}

// });





