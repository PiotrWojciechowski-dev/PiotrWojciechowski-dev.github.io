$('document').ready(function(){
    var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })
    $('#contactModal').on('shown.bs.modal', function () {
        $('#name').trigger('focus')
    })
});

