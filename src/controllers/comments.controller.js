class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    $('.add-comment').click(function(){
      addCommentFormListener();
     });
  }

addCommentFormListener() {
 var comm = document.getElementById("add-comment");
 var ul = document.createElement("ul");
 var formlength = comm.length ;

 for (var i = 0; i < formlength; i++) {
    comm[i].addEventListener("submit",
      function(event){

        event.preventDefault();
      })
  }
}

render(commentObject){

}
}
