class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    var self = this
    $('form').each((i, el) => {
      $(el).submit((event)=> {
        event.preventDefault()
        let imageId = $(el).attr('data-id')
        let input = $(`#comment-description-${imageId}`)
        let commentContent = input.val()
        var comment = new Comment(commentContent, imageId)
        self.render(comment)
        self.addDeleteOption(comment)
        input.val('')
      })
    })
  }

  render(comment) {
    $(`#comments-${comment.image.id}`).append(comment.commentEl())
  }

  addDeleteOption(comment) {
    var self = this
    let button = ` <button id="button-${comment.id}">X</button>`
    $(`#comment-${comment.id}`).append(button)
    $(`#button-${comment.id}`).click(() => {
      $(`#comment-${comment.id}`).remove()
    })
  }
}

class Comment {
  constructor(commentContent, imageId) {
    Comment.saveComment(this)
    this.id = Comment.all.length - 1
    this.image = this.findImage(imageId)
    this.commentContent = commentContent
  }

  static saveComment(comment) {
    this.all ? this.all.push(comment) : this.all = [comment]
  }

  findImage(int) {
    let image = Image.all[int]
    image.comments.push(this)
    return image
  }

  commentEl() {
    return `<li id=comment-${this.id}>${this.commentContent}<br></li>`
  }
}

// then read notes!
