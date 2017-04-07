// create Comment class here
class Comments {
	constructor(imageId) {
		//should initialize with an id, 
		//image object (findImage) and 
		//commentContent (the actual text of the comment)
		this.id = imageId
		this.commentContent = $("#comment-description-"+this.id).val();
		this.findImage(this.id);
		this.all = []
	}

	findImage(id){
		//1)given an int for an image id, returns the image object with that id
		//2)before return - adds current comment to image's comments property
		let imageObject = document.getElementById("image-"+id);
		//imageObject = imageObject.getElementById("add-comment")
		return imageObject;
	}

	commentEl(){
	  	//1)returns a string of html
	  	//2)html has an li tag with an id field and shows the comment
	  	
	  	let comment = this.commentContent
	    let finalComment = "<li data-id='" + this.id + "'>"+comment+"</li>";
	    
	    $("#comments-"+id).append(finalComment);

	  	this.all.push(finalComment)
	    
	    return;
	}
}