// create Comment class here
var comments = []

class Comment {
	constructor(comment, imageId) {
		this.id = imageId;
		this.image = this.findImage(imageId);
		this.commentContent = comment;
		comments.push(this);
	}

	static all() {
		return comments;
	}

	findImage(imageId) {
		return Image.all.find((image) => {
			return image.id === imageId
		});
	}

	commentEl() {
		return "<li id=" + this.id + ">" + this.commentContent + "</li>"
	}
}