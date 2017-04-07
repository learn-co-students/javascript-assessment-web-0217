
class CommentsView {

  static newCommentView(comment) {
    return `<li id=comment-${comment.id}><h3> comment #${comment.id}: </h3></br><h3> ${comment.text} </h3><button onClick=CommentsController.deleteComment(event)>Delete Comment</button></li>`
  }
}
