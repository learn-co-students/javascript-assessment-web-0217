// create Comment class here
'use strict'

class Comment{
  constructor(comment, imageId){
    this.id = this.constructor.all.length
    this.commentContent = comment
    this.image = findImage(imageId)
    this.constructor.all.push(this)
  }
}

Comment.all = []

Comment.prototype.findImage = (imageId) => Image.all[imageId]

Comment.prototype.commentEl = () => `<li>${this.commentContent}</li>`
