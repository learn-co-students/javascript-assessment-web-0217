// create Comment class here
class Comment {
  constructor(imageId,comment){
    this.id = this.constructor.all.length;
    this.comment = comment;
    this.imageId = imageId;
    this.constructor.all.push(this);
  }

 findImage(imageId){
  var img = Image.all[imageId];
  img.comments.push(this);
 }

 commentEl(){
   return `<li id=${this.id}>${this.comment}</li>`
 }

}
Comment.all=[]
