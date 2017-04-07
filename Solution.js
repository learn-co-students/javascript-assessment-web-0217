class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
    let $target = $(`ul.image-${comment.id}`)
    Comment.prototype.commentEl($target, store.comments)
  }

  addCommentFormListener() {
    $('form').each(function(element, index) {
      element.on('submit', function (){
        event.preventDefault()
        createComment(comment, imageId)
      })
    })
  }

  // create Comment class here

  let store = {comments: [], images: []}
  let store = new Store()

  const Comment = class {
    constructor(comment, imageId) {
      this.id = imageId
      this.findImage = this.findImage(imageId)
      this.comment = comment
      store.comments.push(this)
    }
    //not sure how to best connect the image object to the comment

    static all () {
      return store.comments
    }

    findImage(imageId) {
      return store().images.filter((image) => {
        image.id === imageId
      }
    }

    static commentEl($target, comments) {
      let commentItems = comments.map((comment) => {
        return this.commentListTemplate(comment)
      })
      $target.append(commentItems)
    }

    static commentListTemplate(comment) {
      return `<p><li class= "commentDetails" data-id="${comment.id}">
          Comment: ${comment.comment}`
    }
  }

  function createComment () {
    let commentContent = $(this).find(`#comment-description-${index}`).val()
    let imageId = $(this).find(`#image-${index}`).val()

    new Comment (comment, imageId)
    let html = store.comments.forEach((comment) => {
      $(`ul.image-${imageId}`).append(`<li>Content: ${comment.comment}<li>`)
  }
  }


  'use strict';
  // ImageModel

  function Image(title, url) {
    this.id = this.constructor.all.length;
    this.title = title;
    this.url = url;
    this.comments = this.comment();
    store.images.push(this)
    this.constructor.all.push(this);
  }
  comment() {
    return store().comments.filter(function(comment) {
      return comment.id === this.id
    })
  }

  Image.prototype.imageEl = function() {
    return `<div class="image">
      <h2><button class="destroy-image">x</button>${this.title}</h2>
      <ul id="image-${this.id}" data-id="${this.id}">
        <img src="${this.url}"></img>
        <ul id="comments-${this.id}"></ul>
        <form id="add-comment" class="add-comment" data-id=${this.id} action="#" method="post">
          <label for="comment-description">Comment: </label>
          <input type="text" id="comment-description-${this.id}" class="user-text" name="comment-description" placeholder="comment">
          <input type="submit" value="(+) add comment">
        </form>
      </ul>
    </div>`;
  };

  Image.load = function() {
    Image.defaults.map(function(image){
      var newImage = new Image(image.title, image.url)
      ImagesController.render(newImage)
    })
  }

  Image.all = [];
  Image.defaults = [
    {
      title: 'The Perfect Date',
      url: 'https://s3.amazonaws.com/learn-verified/perfectDate.png'
    },
    {
      title: 'Back-end v. Front-end',
      url: 'https://s3.amazonaws.com/learn-verified/backVFront.jpg'
    },
    {
      title: 'Good Programmer',
      url: 'https://s3.amazonaws.com/learn-verified/goodProgrammer.png'
    },
    {
      title: 'Need Snek',
      url: 'https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg'
    },
    {
      title: 'Risky Captcha',
      url: 'https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg'
    },
    {
      title: 'Amazon Sync Loader',
      url: 'https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif'
    },
    {
      title: 'Just Kidding',
      url: 'https://s3.amazonaws.com/learn-verified/woopsNevermind.png'
    },
    {
      title: 'Assembly v. The World',
      url: 'https://s3.amazonaws.com/learn-verified/divideBy10.png'
    },
    {
      title: 'WaffleBoard',
      url: 'https://s3.amazonaws.com/learn-verified/waffleBoard.png'
    },
    {
      title: 'The Bat Strikes Again',
      url: 'https://s3.amazonaws.com/learn-verified/NaNx10Batman.png'
    }
  ];
