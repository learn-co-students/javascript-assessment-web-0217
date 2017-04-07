class Comment {
  constructor(id, comment, imageId) {
    this.id = id
    this.comment = comment
    this.imageId = imageId
  }

  static init(id, comment, imageId) {
    comment = new Comment(
      id,
      comment,
      imageId
    );

    Comment.all.push(comment)

    return comment
  }

  static all() {
    return []
  }

  findImage(imageId) {
    return Comment.all.find((c) => {
      return c.imageId === imageId
    })
  }

  commentEl() {
    return `<li>${this.comment}</li>`
  }
}
