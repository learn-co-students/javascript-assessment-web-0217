class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.addCommentFormListener = this.addCommentFormListener.bind(this)

  }

  init() {
  	this.addCommentFormListener
  }

  addCommentFormListener() {
  	document.getElementById("add-comment").addEventListener("submit", function() {
	  	let imgID = parseInt($("#add-comment").parents('ul').data('id'))
  		
	  	// should have been and instance of a comment instead of comment.prototype
  		Comment.prototype.findImage(imgID).comments.forEach((commentContent) => {
	  		let tempComment = new Comment(commentContent, this.id)
	  		render(tempComment)
  		})  		
  	})


  }

  render(commentObj){
  	console.log('im rendering', commentObj.id)
  	$("#comments-${commentObj.imageId}").append(commentObj.commentEl())
  }

}

