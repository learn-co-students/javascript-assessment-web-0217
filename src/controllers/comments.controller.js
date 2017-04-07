class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {

    // kick off controller from here
  }

  addCommentFormListener() {
    //copied from stqackoverflow need to be refactored for this
    // in the ul data-id= unique id
    document.getElementById('comment-description').addEventListener("submit", function() {
       for (var i = 0, j = this.childNodes.length; i < j, i++) {
           if (this.childNodes[i].value !== "") {
               return (this.childNodes[i].id);

           }
       }
   }, false);
    // create comment form listener code here
  }
}
