
$(function () {
    document.addEventListener('DOMContentLoaded', function () {
        //滑鼠移入時改變背景顏色（藍）
        $('#benifit .card_circle').on('mouseover', function (e) {
          setTimeout(() => {
            $(this).parent().css('color', 'white');
            $(this).parent().find('.card_content_img').hide()
            $(this).parent().find('.card_content_img-black').show()
          }, 200)
        })
        // //滑鼠移出時恢復背景顏色
        $('#benifit .card_circle').on('mouseout', function (e) {
          setTimeout(() => {
            $(this).parent().css('color', 'black');
            $(this).parent().find('.card_content_img').show()
            $(this).parent().find('.card_content_img-black').hide()
          }, 200)
        })
      })

    $('.closeBtn').on('click', function () {
        $('#navbarSupportedContent').addClass('remove')
        setTimeout(() => {
            $('#navbarSupportedContent').removeClass('show')
            $('#navbarSupportedContent').removeClass('remove')
        }, 900)
    })

    $("#myTab .nav-item a.changeHomeTab").on("click", function (e) {
        document.location.href = 'index.html?' + $(this).attr("href");
    });
   
    if (window.location.hash != '') {
        switch (window.location.hash) {
            case '#product2':
                $('button[data-bs-target="#product2"]').click();
                break;
            case '#product3':
                $('button[data-bs-target="#product3"]').click();
                break;
            case '#product4':
                $('button[data-bs-target="#product4"]').click();
                break;
            case '#product5':
                $('button[data-bs-target="#product5"]').click();
                break;
            default:
                break;
        }
    }
});
