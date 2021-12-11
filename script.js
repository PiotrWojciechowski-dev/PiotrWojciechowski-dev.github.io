$('document').ready(function(){
    var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

    $('#contactModal').on('shown.bs.modal', function () {
        $('#modalName').trigger('focus')
    })

    $('#projectModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var title = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text(title)
        getData(title, event)
    });

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
    
    var $row = $('.cardProjects').masonry({
        percentPosition: true
    });
    $row.imagesLoaded().progress( function() {
        $row.masonry('layout');
      });

    $('button[data-bs-toggle=tab]').each(function () {
        var $this = $(this);
        $this.on('shown.bs.tab', function () {
          $row.imagesLoaded( function () {
            $row.masonry({
                percentPosition: true
            });   
          });  
        });
    });

    $(document).on('mouseover','.item',function(){
        $(this).css('border', '1px solid #e5e5e5', 'box-shadow', '0px 8px 16px #888')
        $(this).css('box-shadow', '0px 8px 20px rgba(0,0,0,0.2)')
    });
    $(document).on('mouseout','.item',function(){
        $(this).css('border', 'none')
        $(this).css('box-shadow', 'none')
    });
});

function getData(title) {
    var imgPath = "images/project_images/"
    switch(title) {
        case "Translation App":
            $('#image').attr("src", imgPath + "translate_1.png")
            $('#image2').attr("src", imgPath + "translate_2.png")
            $('#image3').attr("src", imgPath + "translate_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Under Development")
            $('#githubLink').attr("href","https://gitfront.io/r/user-7077611/52d5f15373470f80bcfc83141725e879aa21ac29/4thYear_Project/")
            break;
        case "Social Media website":
            $('#image').attr("src", imgPath + "loop_1.png")
            $('#image2').attr("src", imgPath + "loop_2.png")
            $('#image3').attr("src", imgPath + "loop_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Completed")
            $('#githubLink').attr("href","https://github.com/PiotrWojciechowski-dev/Loop")
            break;
        case "E-commerce website":
            $('#image').attr("src", imgPath + "fresh_1.png")
            $('#image2').attr("src", imgPath + "fresh_2.png")
            $('#image3').attr("src", imgPath + "fresh_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Completed")
            $('#githubLink').attr("href","https://github.com/PiotrWojciechowski-dev/FreshShop-v2.0")
            break;
        case "Dashboard application":
            $('#image').attr("src", imgPath + "dash_1.png")
            $('#image2').attr("src", imgPath + "dash_2.png")
            $('#image3').attr("src", imgPath + "dash_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Completed")
            $('#githubLink').attr("href","https://github.com/Team-Dublin-Project/ProjectDashboard")
            break;
        case "Anime website":
            $('#image').attr("src", imgPath + "aniland_1.png")
            $('#image2').attr("src", imgPath + "aniland_2.png")
            $('#image3').attr("src", imgPath + "aniland_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Completed")
            $('#githubLink').attr("href","https://github.com/PiotrWojciechowski-dev/SSWEB/tree/main/CA2")
            break;
        case "Student Alcohol Consumption":
            $('#image').attr("src", imgPath + "da_1.png")
            $('#image2').attr("src", imgPath + "da_2.png")
            $('#image3').attr("src", imgPath + "da_3.png")
            $('.modal-body p.status').html("<strong>Status: </strong>Completed")
            $('#githubLink').attr("href","https://github.com/PiotrWojciechowski-dev/DataAnalysis_Project")
            
            break;
    }
}