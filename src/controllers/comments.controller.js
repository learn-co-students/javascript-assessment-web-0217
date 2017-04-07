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
