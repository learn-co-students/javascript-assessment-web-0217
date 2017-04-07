function createComment () {
  let commentContent = $(this).find(`#comment-description-${index}`).val()
  let imageId = $(this).find(`#image-${index}`).val()

  new Comment (comment, imageId)
  let html = store.comments.forEach((comment) => {
    $(`ul.image-${imageId}`).append(`<li>Content: ${comment.comment}<li>`)
}
}
