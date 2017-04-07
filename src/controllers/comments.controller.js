class CommentsController {
	constructor() {
		this.$addCommentForm = $('.add-comment')
		this.addCommentFormListener();
	}

	init() {
	}

	addCommentFormListener() {
		this.$addCommentForm.each((index, form) => {
			form.addEventListener("submit", (event) => {
				event.preventDefault();
				let parentInfo = $(event)[0].target.parentNode;
				let value = event.currentTarget.children[1].value;
				commentsController.render(new Comment(value, parentInfo.id))
			})
		});
	}

	render(commentObj) {
		let id = commentObj.id;
		let $commentListSelector = $(`#${id} ul`);
		$commentListSelector.append(commentObj.commentEl());
	}
}
