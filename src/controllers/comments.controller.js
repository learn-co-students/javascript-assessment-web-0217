class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    $( ".add-comment" ).submit(function( event ) {
      event.preventDefault();
      const text=document.getElementById("comment-description-"+ this.dataset.id).value
      const comment=new Comment (this.dataset.id, text);
      $(`#comments-${this.dataset.id}`).append(this.commentContent)
      // render(comment)
    });

  }

  // render(commentObject){
  //   $(`#comments-${this.imageId}`).append(commentObject.commentContent)
  // }


}
