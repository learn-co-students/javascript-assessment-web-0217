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
				let parentInfo = event.currentTarget.parentNode; // grab the info from the parent ul
				let $input = $(event.currentTarget).find(".user-text"); // grab the info from the input text-field tag
				let comment = new Comment($input.val(), parseInt(parentInfo.dataset.id))
				$input.val(""); // reset the input box
				commentsController.render(comment);
			})
		});
	}

	render(commentObj) {
		let id = commentObj.image.id;
		let $commentListSelector = $(`#image-${id} ul`); // grab the image's parent which is the ul
		$commentListSelector.append(commentObj.commentEl()); // and append the new comment
	}
}
