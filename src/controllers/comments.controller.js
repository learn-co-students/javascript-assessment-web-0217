class CommentsController {
	constructor() {
		this.$addCommentForm = $('.add-comment')
	}

	init() {
		this.addCommentFormListener();
	}

	addCommentFormListener() {
		this.$addCommentForm.each((index, form) => {
			form.addEventListener("submit", (event) => {
				event.preventDefault();
				let $parent = $(event.currentTarget).parent(); // grab the info from the parent ul
				let $input = $(event.currentTarget).find(".user-text"); // grab the info from the input text-field tag
				let comment = new Comment($input.val(), parseInt($parent.data().id))
				commentsController.render(comment);
				$input.val(""); // reset the input box
			})
		});
	}

	render(commentObj) {
		let id = commentObj.image.id;
		let $commentListSelector = $(`#image-${id} ul`); // grab the image's parent which is the ul
		$commentListSelector.append(commentObj.commentEl()); // and append the new comment
	}
}
