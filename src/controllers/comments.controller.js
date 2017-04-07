class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
  	this.addCommentFormListener()
  	this.render()

    // kick off controller from here
  }

  addCommentFormListener() {
  		document.getElementById("add-comment").addEventListener('click', render)
  	}
    // create comment form listener code here

  render() {
  	document.getElementById("comment-description-${comment.id}").innerHTML = newComment()
  }

}
