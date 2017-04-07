// create Comment class here

class Comment {
  constructor (comment, imageID) {
    this.comment = comment
    this.image = Image.all[imageID]
    this.imageID = imageID
    if (!!allComments[imageID]){
      this.id = allComments[imageID].length
      allComments[imageID] = [...allComments[imageID], this]
    } else {
      allComments[imageID] = [this]
    }
  }
  static all () {
    let comments = []
    for (let i = 0; i<Image.all.length; i++) {
      if (allComments[i]){
        allComments[i].forEach((comment) => {
          comments.push(comment)
        })
      }
    }
    // allComments.keys.forEach((comment) => {
    //   [...comments, comment]
    // })
    return comments
  }
  static findImage (id) {
    const comments = allComments.id
    const image = comments[0].image
    comments.forEach((comment) => {
      if (image.comments.includes(comment)){
        return
      }else {
        image.comments.push(comment)
      }
    })
    return image
  }

  commentEL(comment){
    return `<li id="${comment.imageID}${comment.id}">
    ${comment.comment}
    </li>`
  }

}


const allComments = {}

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.addCommentFormListener()
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    const commentForms = $(".add-comment")
    for (let i = 0; i<commentForms.length; i++) {
      commentForms[i].addEventListener('submit', (event) => {
        event.preventDefault()
        let imageID = event.currentTarget.dataset.id
        let image = Image.all[imageID]
        let commentContent = event.currentTarget.children[1].value
        let comment = new Comment (commentContent, imageID)
        this.render(comment)
      })
    }
  }

  render(comment) {
    // let targetText = `ul#comments-${this.id}`
    let $target = $(`ul#comments-${comment.imageID}`)
    $target.append(comment.commentEL(comment))
  }



    // create comment form listener code here
}
// <ul id="comments-${this.id}"></ul> --- append to this
