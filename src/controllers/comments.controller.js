class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    // this.addCommentFormListener = this.addCommentFormListener.bind(this)

  }

  init() {
  	this.addCommentFormListener()
  }

  addCommentFormListener() {
  	document.getElementById("add-comment").addEventListener("submit", function(event) {
	  	event.preventDefault()
      let imgID = parseInt($("#add-comment").parents('ul').data('id'))
  		let tempComment = new Comment($(event.currentTarget).find(".user-text").val(), imgID)
  		commentsController.render(tempComment)
      // comment controller was defined in index.js
    })
      // should have been and instance of a comment instead of comment.prototype
    //   this.image.comments.forEach((commentContent) => {
  		// })  		
  	// })


  }

  render(commentObj){
  	console.log('im rendering', commentObj.id)
  	$(`#comments-${commentObj.imageId}`).append(commentObj.commentEl())
  }

}

