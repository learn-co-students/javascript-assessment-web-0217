//working jquery. iterates through forms, hadles each submit and appens comment to ul.
$('form').each(function(){
    var $this = $(this);
    var $parent = $this.parent();
    var id = $(this).data("id")
    var newId = id.toString()
    $(this).submit(function (e) {
        e.preventDefault();
        var comment = $("#comment-description-"+newId).val()
        var finalComment = "<li>"+comment+"</li>"
        $("#comments-"+newId).append(finalComment)
        return false;
    })
});     