(function() {
    var imgs = document.querySelectorAll('.wrap__img');

    imgs.forEach(function(img) {
        var src = img.getAttribute('src'),
            bigImg = document.querySelector('.gallery__img'),
            galleryWrap = document.querySelector('.gallery'),
            close = galleryWrap.querySelector('.gallery__close');

        img.addEventListener('click', function() {
            galleryWrap.classList.add('visible');
            bigImg.setAttribute('src', src);
        });



        close.addEventListener('click', function() {
            galleryWrap.classList.remove('visible');
        });

        document.addEventListener('click', function(e) {
            var place = e.target,
                matchesImg = place.matches('.wrap__img, .wrap__img *'), // проверка клика на фотографиях
                matchesGallery = place.matches('.gallery, .gallery *'); // провера клика на галерее

            // если кликаем не на фотографиях и не внутри галереи, то галерею закрываем
            if(!matchesImg && !matchesGallery) {
                galleryWrap.classList.remove('visible');
            }
        });
    });
}());
