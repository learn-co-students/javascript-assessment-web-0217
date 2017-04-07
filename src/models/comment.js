// create Comment class here
class Comment {
	constructor(comment, imageId) {
		this.id = imageId;
		this.image = this.findImage(imageId);
		this.commentContent = comment;
		Comment.all.push(this);
	}

	static all() {
		return Comment.all;
	}

	findImage(imageId) {
		let image = Image.all.find((image) => {
			return image.id === imageId
		});
		if (image) image.comments.push(this);
		return image;
	}

	commentEl() {
		return "<li id=" + this.id + ">" + this.commentContent + "</li>"
	}
}

Comment.all = []