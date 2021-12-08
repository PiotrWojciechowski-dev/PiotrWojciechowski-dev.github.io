$('document').ready(function(){
    var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

    $('#contactModal').on('shown.bs.modal', function () {
        $('#modalName').trigger('focus')
      })

    var forms = document.querySelectorAll('.needs-validation')
    // Loop over form and prevent submission if input is incorrect
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                alert("Your message has been sent successfully!")
            }
            form.classList.add('was-validated')
        }, false)
    });

    $(".progress-bar").each(function(i) {
        $(this).animate({
          width: $(this).attr('aria-valuenow') + '%'
        }, 2000);
    });
});
