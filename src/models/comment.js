// create Comment class here
class Comment {

	static all() {
		return Comment.allComments;
	}

	constructor(comment, imageId) {
		this.id = Comment.all().length + 1;
		this.image = this.findImage(imageId);
		this.commentContent = comment;
		Comment.all().push(this);
	}

	findImage(imageId) {
		let image = Image.all.find((image) => {
			return image && image.id === imageId
		});
		if (image) image.comments.push(this);
		return image;
	}

	commentEl() {
		return "<li id=" + this.id + ">" + this.commentContent + "</li>"
	}
}

Comment.allComments = [];