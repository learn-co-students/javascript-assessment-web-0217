// create Comment class here
var allComments = []
class Comment {
	constructor(content, imageId){
		this.content = content
		this.imageId = imageId
		this.commentId = allComments.length
		this.addCommentToAll()
		this.image = this.findImage(imageId)
	}

	addCommentToAll(){
		allComments.push(this)
	}

	static all(){
		return allComments
	}

	findImage(imageId){
		Image.all.forEach((img) => {
			if (img.id === imageId) {
				img.comments.push(this)
				return img
			}
		})
	}

	commentEl(){
		return `<li id=comment${this.commentId}>${this.content}</li>`
	}
}