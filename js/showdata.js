$(function () {
    function showHeader(data) {
        var innerHtml = ''
        innerHtml += '<nav class="navbar navbar-light navbar-expand-lg header py-3">'
            + ' <div class="container-fluid">'
            + ' <a class="navbar-brand" href="' + data.logo.href + '">' + data.logo.text
            + '</a>'
            + '<button class="navbar-toggler click" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
            + '<span class="navbar-toggler-icon"></span>'
            + '</button>'
            + '<div class="collapse navbar-collapse " id="navbarSupportedContent">'
            + '<div class="mask"></div>'
            + '<ul class="navbar-nav nav-tabs nav ms-auto mb-2 mb-lg-0 border-0" id="myTab" role="tablist">'
            + '<li class="text-end px-2 closeBtn d-lg-none d-inline" >X</li>';
        data.nav.forEach((e, i) => {
            innerHtml += ' <li class="nav-item border-0">'
                + '<a class="nav-link  border-0 ';
            if (i === 0) {
                innerHtml += 'active';
                innerHtml += '" href=' + e.href + '>' + e.text + '</a>';
            } else if (e.list) {
                innerHtml += 'dropdown-toggle posistion-relative'
                    + '" href=' + e.href + '  data-bs-toggle="dropdown" role="button" aria-expanded="false">' + e.text + '</a>';
                innerHtml += '<ul class="dropdown-menu border-0">';
                e.list.forEach(item => {
                    innerHtml += ' <li><a class="dropdown-item" href=' + item.href + '>' + item.text + '</a></li>'
                })
                innerHtml += '</ul>';
            } else {
                innerHtml += '" href=' + e.href + '>' + e.text + '</a>';
            }
            innerHtml += ' </li>'
        });
        return innerHtml
    }

    function showHome(data) {
        var innerHtml = '';
        if (data.slogan) {
            var slogan = data.slogan
            innerHtml += '<div class="container-fluid p-0">'
                + '<div class="banner positoin-relative">'
                + '<div class="bannerText">'
                + '<p  data-aos="fade-up" data-aos-duration="3000">' + slogan.title + '</p>'
                + '<p  data-aos="fade-up" data-aos-duration="3000">' + slogan.text + '</p>'
                + '</div>'
                + '</div>'
                + '</div>';
        }
        innerHtml += '<div class="positoin-relative">';
        if (data.introduction) {
            var introduction = data.introduction
            innerHtml += ' <div class="home-introduction">'
                + '<div class="container-lg">'
                + '<div class="text-center">'
                + '<p class="fw-bold font-32px fcolor-green">' + introduction.title + '</p>'
                + '</div>'
                + '<div class="d-flex flex-wrap justify-content-between align-items-center">'
                + '<div class="row">';
            introduction.content.forEach(e => {
                innerHtml += ' <div class="col mb-3" data-aos="flip-left" data-aos-duration="800" data-aos-delay="0">'
                    + '<div class="card border-0 text-center">'
                    + '<span class="d-inline-block ">'
                    + '<img src=' + e.imgUrl + ' class="rounded img card_content_img" alt=' + e.imgAlt + '>'
                    + '</span>'
                    + '<div class="card-body bottom-0">'
                    + '<h5 class="card-title">' + e.text + '</h5>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            })
            innerHtml += '</div>'
                + '</div>'
                + '</div>'
                + '</div>';
        }
        if (data.certification) {
            var certification = data.certification
            innerHtml += '<div class="home-certification bg-lightgray">'
                + '<div class="container-lg">'
                + '<div class="text-center">'
                + '<p class="fw-bold font-32px fcolor-green">' + certification.title + '</p>'
                + '</div>'
                + '<div >'
                + '<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center">';
            certification.content.forEach(e => {
                innerHtml += '<div class="col" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">'
                    + '<div class="card  m-2 p-4 border-0">'
                    + '<div class="card_content text-center">'
                    + '<span class="d-inline-block ">'
                    + '<img src=' + e.imgUrl + ' class="rounded img card_content_img p-2" alt=' + e.imgAlt + '>'
                    + '</span>'
                    + '<div class="card-body px-0 mt-2">'
                    + '<p class="card-text">' + e.text + '</p>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            })
            innerHtml += '</div>'
                + '</div>'
                + '</div>'
                + '</div>';
        }
        innerHtml += '</div>';
        return innerHtml
    }

    function showProduct(data) {
        var innerHtml = '';
        var allList = [];
        var isEnglish = false;
        if (getParameterByName('language'))
            isEnglish = true;
        innerHtml += '<div class="positoin-relative product-environment">'
            + '<div class="container-lg">'
            + '<div class="text-center">'
            + '<p class="fw-bold font-32px fcolor-green">' + data.title + '</p>'
            + '</div>'
            + '<ul class="nav nav-tabs mb-3 justify-content-center" id="InformationTab" role="tablist">';
        if (data.list) {
            var tabList = data.list;
            tabList.forEach((e, i) => {
                if (e.subList)
                    allList.push(e.subList);
                innerHtml += ' <li class="nav-item" role="presentation">'
                    + '<button class="nav-link ';
                if (i === 0)
                    innerHtml += 'active'
                else
                    innerHtml += ''
                innerHtml += ' link-success fw-bold"  data-bs-toggle="tab" data-bs-target="#product' + i + '" type="button" role="tab" aria-controls="product' + i + '" aria-selected="true">'
                    + e.text + '</button>'
                    + '</li>';
            })
            innerHtml += '</ul>'
                + '<div class="tab-content" id="InformationContent">';
            tabList.forEach((e, i) => {
                if (e.subList) {
                    var subList = e.subList;
                    innerHtml += '<div class="tab-pane" id="product' + i + '" role="tabpanel" aria-labelledby="pills-home-tab">'
                        + '<div>'
                        + '<div class="row row-cols-1 row-cols-sm-3 row-cols-lg-4 justify-content-center justify-content-md-start" data-aos="zoom-in" data-aos-duration="1000">';
                    subList.forEach((item, index) => {
                        var itemHref = 'productDetail.html?item=' + i + '-' + index;
                        if (isEnglish) {
                            itemHref = 'productDetail.html?language=english&item=' + i + '-' + index;
                        }
                        innerHtml += '<div class="col-10 col-md-6 col-lg-4 col-xl-3 mb-3">'
                            + '<div class="card">'
                            + '<a href=' + itemHref + ' class="text-decoration-none text-secondary">'
                            + '<img src=' + item.imgUrl + ' class="card-img-top" alt="' + item.imgAlt + '">'
                            + '<div class="card-body">'
                            + '<h5 class="card-title fw-bold">' + item.title + '</h5>'
                            + '<p class="card-text"></p>'
                            + '<p class="mb-0 text-decoration-underline">' + item.buttonText + '</p>'
                            + '</div>'
                            + '</a>'
                            + '</div>'
                            + '</div>'
                    })
                    innerHtml += '</div>'
                        + '</div>'
                        + '</div>';
                } else {
                    innerHtml += '<div class="tab-pane show active" id="product0" role="tabpanel" aria-labelledby="pills-home-tab">'
                        + '<div>'
                        + '<div class="row row-cols-1 row-cols-sm-3 row-cols-lg-4 justify-content-center justify-content-md-start" data-aos="zoom-in" data-aos-duration="1000">';
                    allList.forEach((item, index) => {
                        index++
                        item.forEach((items, number) => {
                            var itemHref = 'productDetail.html?item=' + index + '-' + number;
                            if (isEnglish) {
                                itemHref = 'productDetail.html?language=english&item=' + index + '-' + number;
                            }
                            innerHtml += '<div class="col-10 col-md-6 col-lg-4 col-xl-3 mb-3">'
                                + '<div class="card">'
                                + '<a href=' + itemHref + ' class="text-decoration-none text-secondary">'
                                + '<img src=' + items.imgUrl + ' class="card-img-top" alt="' + items.imgAlt + '">'
                                + '<div class="card-body">'
                                + '<h5 class="card-title fw-bold">' + items.title + '</h5>'
                                + '<p class="card-text"></p>'
                                + '<p class="mb-0 text-decoration-underline">' + items.buttonText + '</p>'
                                + '</div>'
                                + '</a>'
                                + '</div>'
                                + '</div>'
                        })
                    })
                    innerHtml += '</div>'
                        + '</div>'
                        + '</div>';
                }
            })
            innerHtml += '</div>'
                +'</div>'
                + '</div>';
        }
        return innerHtml;
    }

    function ProductDetail(data, mainNumber, subNumber) {
        var innerHtml = '';
        var detail = data.list[mainNumber].subList[subNumber];
        innerHtml += '<div class="positoin-relative product-environment mt-5">'
            + '<div class="container-lg">'
            + '<div class="text-center mb-5">'
            + '<p class="fw-bold font-32px fcolor-green">' + data.detailTitle + '</p>'
            + '</div>'
            + '<div class="mb-5" data-aos="zoom-in" data-aos-duration="1500">'
            + '<div class="d-flex flex-wrap">'
            + '<div class="col-12 col-md-5 mb-5 px-md-3">'
            + '<span class="d-inline-block">'
            + '<img src=' + detail.imgUrl + ' class="d-block w-100 " alt=' + detail.imgAlt + '>'
            + '</span>'
            + '</div>'
            + '<div class="col-12 col-md-7">'
            + '<div>'
            + '<p class="fw-bold font-24px">' + detail.title + '</p>'
            + '<div class="mb-2">';
        if (detail.description) {
            var description = detail.description;
            description.forEach(e => {
                innerHtml += '<span class="d-block">' + e + '</span>'
            })
        }
        innerHtml += '</div>';
        + '<p>' + detail.specifications + '</p>'
        if (detail.table) {
            var table = detail.table;
            innerHtml += '<table class="table  mb-5 table-striped text-center">';
            table.forEach((e, i) => {
                if (i === 0) {
                    innerHtml += '<thead class="fw-bold">';
                } else {
                    innerHtml += '<tbody>';
                }
                +'<tr>';
                e.value.forEach(item => {
                    if (i === 0)
                        innerHtml += '<th scope="col">' + item + '</th>'
                    else
                        innerHtml += '<td>' + item + '</td>'
                })
                innerHtml += '</tr>';
                if (i === 0) {
                    innerHtml += '</thead>';
                } else {
                    innerHtml += '</tbody>';
                }
            })
            innerHtml += '</table>';
        }
        innerHtml += '<div class="mb-2">';
        if (detail.Remark) {
            var Remark = detail.Remark;
            Remark.forEach(e => {
                innerHtml += '<span class="d-block">' + e + '</span>'
            })
        }
        innerHtml += '</div>';
        if (detail.buyLink) {
            var buyLink = detail.buyLink;
            buyLink.forEach(e => {
                innerHtml += '<a class="text-decoration-none link-dark fw-bold d-block" href=' + e.href + '>' + e.text + '  &rarr;</a>'
            })
        }
        innerHtml += '</div>';
        +'</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
        return innerHtml;
    }

    function showContact(data) {
        var innerHtml = '';
        innerHtml += '<div class="positoin-relative product-environment my-5">'
            + '<div class="container-lg my-5">'
            + '<div class="text-center mb-5">'
            + '<p class="fw-bold font-32px">' + data.title + '</p>'
            + '<p class="text-center mb-3">' + data.text + '</p>'
            + '</div>'
            + '<div>';
        if (data.form) {
            var form = data.form;
            innerHtml += '<form class="row g-3" action=' + form.action + ' method=' + form.method + '>'
            form.content.forEach(e => {
                innerHtml += '<div class="' + e.class + ' mb-2">'
                    + '<div class="form-floating">';
                switch (e.control) {
                    case 'input':
                        innerHtml += '<input type=' + e.type + ' class="form-control" id=' + e.type + ' placeholder=' + e.type + '>'
                        break;
                    case 'textarea':
                        innerHtml += '<textarea class="form-control" placeholder=' + e.type + ' id=' + e.type + '></textarea>'
                        break;
                    default:
                        break;
                }
                innerHtml += '<label for="floatingComments">' + e.text + '</label>'
                    + '</div>'
                    + '</div>';
            })
            innerHtml += '<div class="col-12 mb-2">'
                + '<button type="submit" class="btn btn-dark">' + form.buttonText + '</button>'
                + '</div>'
                + '</form>';
        }
        innerHtml += '</div>'
            + '</div>'
            + '</div>';
        return innerHtml;
    }

    function showAbout(data) {
        var innerHtml = '';
        innerHtml += '<div class="positoin-relative product-environment mt-5">'
            + '<div class="container-lg">'
            + '<div class="text-center">'
            + '<p class="fw-bold font-32px">' + data.title + '</p>'
            + '</div>'
            + '<div class="d-flex  justify-content-center align-items-center text-center">'
            + '<div class="col-lg-7 col-10">';
        if (data.content) {
            var content = data.content;
            content.forEach((e, index) => {
                innerHtml += '<div class=" mb-3" data-aos="zoom-in" data-aos-duration="1000">'
                    + '<div class="card border-0 justify-content-center align-items-center">'
                    + '<span class="d-inline-block">'
                    + '<img src=' + e.imgUrl + ' class=" ';
                if (index === 0)
                    innerHtml += 'w-100 '
                else
                    innerHtml += 'card-img-top'

                innerHtml += '" alt=' + e.imgUrl + '>'
                    + '</span>'
                    + '<div class="card-body">'
                    + '<h5 class="card-title fw-bold">' + e.title + '</h5>'
                    + '<p class="card-text">' + e.text + '</p>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
            })
        }
        innerHtml += '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
        return innerHtml;

    }

    function showFooter(data) {
        var innerHtml = '';
        innerHtml += '  <div class="footer bg-dark text-white" id="contact">'
            + '<div class="container-fluid">'
            + '<p class="font-32px">' + data.title + '</p>'
            + '<div>';
        data.content.forEach(e => {
            innerHtml += '<span class="pe-2 d-inline-block">' + e + '</span>'
        })
        innerHtml += '<hr>'
            + '</div>'
            + '</div>'
            + '</div>';
        return innerHtml;
    }
    function showData(data) {
        if (typeof data.header == 'object') {
            var header = showHeader(data.header)
            $('.js-header').append(header);
        }

        if (typeof data.home == 'object') {
            var home = showHome(data.home)
            $('.js-home').append(home);
        }

        if (typeof data.product == 'object') {
            var product = showProduct(data.product);
            $('.js-product').append(product);
            locationHashChanged()
        }

        if (typeof data.contact == 'object') {
            var contact = showContact(data.contact)
            $('.js-contact').append(contact);
        }

        if (typeof data.about == 'object') {
            var about = showAbout(data.about)
            $('.js-about').append(about);
        }

        if (typeof data.footer == 'object') {
            var footer = showFooter(data.footer)
            $('.js-footer').append(footer);
        }

        if (getParameterByName('item')) {
            var mainNumber = getParameterByName('item').split('-')[0]
            var subNumber = getParameterByName('item').split('-')[1]
            var productDetail = ProductDetail(data.product, mainNumber, subNumber)
            $('.js-productDetail').append(productDetail);
        }

        $('.closeBtn').on('click', function () {
            $('#navbarSupportedContent').addClass('remove')
            setTimeout(() => {
                $('#navbarSupportedContent').removeClass('show')
                $('#navbarSupportedContent').removeClass('remove')
            }, 900)
        })

        AOS.init();

        $('button[data-bs-toggle="tab"]').on("hidden.bs.tab", function (event) {
            var target = event.target.dataset.bsTarget;
            var relatedTarget = event.relatedTarget.dataset.bsTarget;
            $('#InformationContent .tab-pane .row').removeClass('aos-animate');
            $(relatedTarget + " .row").addClass('aos-animate')
        });

        setTimeout(() => {
            $('#InformationContent .tab-pane .row').removeClass('aos-animate');
            $('#InformationContent .tab-pane.active .row').addClass('aos-animate');
        }, 300)
    }

    function getData(language) {
        fetch("json/" + language + ".json", {
            method: "GET",
        })
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                showData(data);
                changeUrl();
            });
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    if (getParameterByName('language') === 'english')
        getData('english');
    else {
        getData('chinese');
    }

    function locationHashChanged() {
        if (window.location.hash != '') {
            switch (window.location.hash) {
                case '#product0':
                    $('button[data-bs-target="#product0"]').click();
                    break;
                case '#product1':
                    $('button[data-bs-target="#product1"]').click();
                    break;
                case '#product2':
                    $('button[data-bs-target="#product2"]').click();
                    break;
                case '#product3':
                    $('button[data-bs-target="#product3"]').click();
                    break;
                case '#product4':
                    $('button[data-bs-target="#product4"]').click();
                    break;
                default:
                    break;
            }
        }
    }

    function changeUrl() {
        $("li a").each(function () {
            if (getParameterByName('item') !== null) {
                var _link = $(this).attr('href');
                var _topHash = _link.split('?')[0];
                if (_link.split('?')[1]) {
                    var _Endhash = _link.split('?')[1];
                    $(this).attr('href', _topHash + '?item=' + getParameterByName('item') + '&' + _Endhash)
                } else {
                    $(this).attr('href', _topHash + '?item=' + getParameterByName('item'))
                }
            }
        })
    }
    window.onhashchange = locationHashChanged;

})