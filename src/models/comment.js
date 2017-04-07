// create Comment class here

class Comment{
  constructor(commentContent, imageId){
    this.commentContent=commentContent;
    this.imageId=imageId
    this.constructor.all.push(this)
  }

  static all(){
    return this.all
  }

  findImage(imageId){
    let image=Image.all.find((image)=>{
      return image.id===imageId
    })
    image.comments.push(this)
  }

  commentEl(){
    const html= `<li id=image${this.imageId}-comment>${this.commentContent}</li>`;
    return html
  }



}
Comment.all = [];
