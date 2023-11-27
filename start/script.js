document.addEventListener('DOMContentLoaded', function () {
    function createButton(text, classes) {
        let button = document.createElement('button');
        button.type = 'button';
        button.className = `btn ${classes} mb-2`;
        button.textContent = text;
        return button;
    }

    function elementsContainerComponent() {
        let container = document.createElement('div');
        container.id = 'elementsContainerComponent';
        container.className = 'subComponent overflow-auto p-2';
        container.style.height = '200px';
    
        for (let i = 1; i <= 8; i++) {
            let element = document.createElement('div');
            element.className = 'elementComponent bg-light border p-2 mb-2 rounded';
            element.textContent = `Источник ${i}`;
            container.appendChild(element);
        }
    
        container.addEventListener('click', function (e) {
            if (e.target && e.target.matches('.elementComponent')) {
                let elements = container.getElementsByClassName('elementComponent');
                Array.from(elements).forEach(el => el.classList.remove('selected'));
    
                e.target.classList.add('selected');
            }
        });
    
        return container;
    }

    function buttonsContainerComponent() {
        let container = document.createElement('div');
        container.id = 'buttonsContainerComponent';
        container.className = 'subComponent d-flex justify-content-around p-2';

        container.appendChild(createButton('Добавить источник', 'btn-primary'));
        container.appendChild(createButton('Удалить источник', 'btn-secondary'));
        container.appendChild(createButton('Изменить источник', 'btn-info'));

        return container;
    }

    function InfoComponent() {
        let infoComponent = document.createElement('div');
        infoComponent.id = 'infoComponent';
        infoComponent.innerHTML = '<h4>Информация</h4>';
        infoComponent.className = 'd-flex flex-column flex-grow-1 bg-white border p-3';
    
        let countRowComponent = document.createElement('div');
        countRowComponent.id = 'countRowComponent';
        countRowComponent.className = 'subComponent d-flex justify-content-between align-items-center p-2';
        countRowComponent.innerHTML = '<span class="countLabel">Количество записей:</span><span class="countValue">5</span>';
    
        let countColumnComponent = document.createElement('div');
        countColumnComponent.id = 'countColumnComponent';
        countColumnComponent.className = 'subComponent d-flex justify-content-between align-items-center p-2';
        countColumnComponent.innerHTML = '<span class="countLabel">Количество полей:</span><span class="countValue">8</span>';
    
        let jsonComponent = document.createElement('div');
        jsonComponent.id = 'JSONComponent';
        jsonComponent.className = 'subComponent flex-grow-1 p-2';
        jsonComponent.innerHTML = '<h4>JSON</h4>';
    
        infoComponent.appendChild(countRowComponent);
        infoComponent.appendChild(countColumnComponent);
        infoComponent.appendChild(jsonComponent);
    
        return infoComponent;
    }
    
    function LoadedComponent() {
        let loadedComponent = document.createElement('div');
        loadedComponent.id = 'loadedComponent';
        loadedComponent.className = 'p-2';
        loadedComponent.innerHTML = '<h3>Данные загружены</h3>';
    
        return loadedComponent;
    }
    
    function URLComponent() {
        let urlComponent = document.createElement('div');
        urlComponent.id = 'URLComponent';
        urlComponent.className = 'subComponent p-2';
        urlComponent.innerHTML = '<h4>Путь к источнику</h4>';
    
        return urlComponent;
    }

    function ButtonsComponent() {
        let buttonsComponent = document.createElement('div');
        buttonsComponent.id = 'buttonsComponent';

        buttonsComponent.appendChild(createButton('Загрузить из файла', 'btn-primary mb-2'));
        buttonsComponent.appendChild(createButton('Загрузить', 'btn-primary mb-2'));
        buttonsComponent.appendChild(createButton('Сохранить', 'btn-primary mb-2'));
        buttonsComponent.appendChild(createButton('Рассчитать', 'btn-primary mb-2'));

        return buttonsComponent;
    }

    function MainComponent() {
        let mainComponent = document.createElement('div');
        mainComponent.id = 'mainComponent';
        mainComponent.className = 'd-flex h-100';

        let menuComponent = document.createElement('div');
        menuComponent.id = 'menuComponent';
        menuComponent.className = 'd-flex flex-column bg-light p-3';
        menuComponent.style.flex = '0 0 20%';

        let menuTitle = document.createElement('h3');
        menuTitle.textContent = 'МЕНЮ';
        menuComponent.appendChild(menuTitle);

        menuComponent.appendChild(ButtonsComponent());
        menuComponent.appendChild(LoadedComponent());

        let bodyComponent = document.createElement('div');
        bodyComponent.id = 'bodyComponent';
        bodyComponent.className = 'd-flex flex-column flex-grow-1 p-3';

        let listComponent = document.createElement('div');
        listComponent.id = 'listComponent';
        listComponent.className = 'd-flex flex-column flex-grow-1 mb-3 bg-white border p-3';
        listComponent.innerHTML = '<h4>Список источников данных</h4>';
        listComponent.appendChild(URLComponent());
        listComponent.appendChild(elementsContainerComponent());
        listComponent.appendChild(buttonsContainerComponent());

        bodyComponent.appendChild(listComponent);
        bodyComponent.appendChild(InfoComponent());

        mainComponent.appendChild(menuComponent);
        mainComponent.appendChild(bodyComponent);

        return mainComponent;
    }

    let app = document.getElementById('app');
    app.appendChild(MainComponent());
});
