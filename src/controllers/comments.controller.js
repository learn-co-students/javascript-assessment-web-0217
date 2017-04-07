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
				let parentInfo = $(event)[0].target.parentNode;
				let value = event.currentTarget.children[1].value;
				let comment = new Comment(value, parseInt(parentInfo.dataset.id))
				commentsController.render(comment);
			})
		});
	}

	render(commentObj) {
		let id = commentObj.id;
		let $commentListSelector = $(`#${id} ul`);
		$commentListSelector.append(commentObj.commentEl());
	}
}
