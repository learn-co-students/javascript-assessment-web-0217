class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
    // kick off controller from here
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', '.add-comment',(event) => {
      event.preventDefault();
      //  function should grab the imageId + comment
      //  and create a new Comment with those argument

      var imageId = parseInt($(this).parents('h2').next('ul').data('id'));
      var comment = $(event.currentTarget).find("input[type=text]").val()
      var newComment = new Comment(imageid, comment);
      newComment.findImage(imageid)
      $(event.currentTarget).find("input[type=text]").val("");
      this.render(comment)
    });
  }

  render(comment) {
    let $imageul = this.$target.find("ul#comments-" + comment["imageid"])
    $imageul.append(comment.commentEl());
    // document.getElementById("comment-description-${comment.id}").innerHTML = newComment()
  }

}
