document.addEventListener('DOMContentLoaded', function () {
    var elementsContainer = document.getElementById('elementsContainerComponent');
    elementsContainer.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.elementComponent')) {
            var elements = elementsContainer.getElementsByClassName('elementComponent');
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('selected');
            }
            e.target.classList.add('selected');
        }
    });
});