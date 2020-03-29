// Marking to as completed

/*Method-1
$("li").on("click", function() {
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({ color: "black", textDecoration: "none" });
  } else {
    $(this).css("color", "gray");
    $(this).css("text-decoration", "line-through");
  }
});*/
//OR

/*Here, the event listener '.on("click")' will trigger for all the new lists '.list' that are added to 'ul' .list-container  */
$(".list-container").on("click", ".text", function(event) {
  $(this).toggleClass("completed"); //class .completed adds strike-through feature to the list
  event.stopPropagation();
});

//Deleting Todo
$(".list-container").on("click", ".delete", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    }); //removes parent element (li) with fading out effect
  event.stopPropagation();
});

//Adding new Todo
$(".add-todo").keypress(function(event) {
  if (event.which === 13) {
    if ($(this).val() === "") {
      return;
    } else {
      var newTodo = $(this).val();
      $(this).val("");
      $(".list-container").append(
        '<li class = "list"><span class = "delete"><img src="./assets/icons/trash-can.svg" alt="trash-can" /> </span><div class = "text">' +
          newTodo +
          "</div></li> "
      ); //append() will append new todo list to the existing ul containe
    }
  }
});

//linking add button to jquery
$(".add-todo-logo").on("click", function() {
  $(".add-todo").fadeToggle();
});
