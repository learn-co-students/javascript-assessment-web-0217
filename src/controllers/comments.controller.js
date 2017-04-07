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
				let parentInfo = $(event)[0].target.parentNode; // grab the info from the parent ul
				let value = event.currentTarget.children[1].value; // grab the value of the input tag
				let comment = new Comment(value, parseInt(parentInfo.dataset.id))
				commentsController.render(comment);
			})
		});
	}

	render(commentObj) {
		let id = commentObj.image.id;
		let $commentListSelector = $(`#image-${id} ul`);
		$commentListSelector.append(commentObj.commentEl());
	}
}
