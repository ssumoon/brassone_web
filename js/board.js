window.addEventListener('load', function () {
    const boardDetailElement = document.body.querySelector('.title-area');
    const boardDetailMainImgElement = boardDetailElement.querySelector('.sub-head-img');
    const boardDetailMainImgImgElement = boardDetailMainImgElement.querySelector('img');
    const boardDetailMetaTitleElement = boardDetailElement.querySelector('h1');
    const boardDetailBreadcrumbItems = boardDetailElement.querySelectorAll('.breadcrumb > li > a');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            boardDetailElement.style.paddingTop = '500px';
            boardDetailMainImgElement.style.maxWidth = '100%';
            boardDetailMainImgElement.style.height = '100vh';
            boardDetailMainImgImgElement.style.opacity = '0.45';
            boardDetailMetaTitleElement.style.color = '#ffffff';
            boardDetailBreadcrumbItems.forEach(function (element) {
                element.style.color = '#ffffff';
                const icon = element.querySelector('img');
                icon.style.filter = 'invert(1)';
            });
        } else {
            boardDetailElement.style.paddingTop = null;
            boardDetailMainImgElement.style.maxWidth = null;
            boardDetailMainImgElement.style.height = null;
            boardDetailMainImgImgElement.style.opacity = null;
            boardDetailMetaTitleElement.style.color = null;
            boardDetailBreadcrumbItems.forEach(function (element) {
                element.style.color = null;
                const icon = element.querySelector('img');
                icon.style.filter = null;
            });
        }
    });
});
