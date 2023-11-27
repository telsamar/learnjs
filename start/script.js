document.addEventListener('DOMContentLoaded', function () {
    function createButton(text, classes) {
        let button = document.createElement('button');
        button.type = 'button';
        button.className = `btn ${classes} mb-2`;
        button.textContent = text;
        return button;
    }

    function elementsContainerComponent(state) {
        let container = document.createElement('div');
        container.id = 'elementsContainerComponent';
        container.className = 'subComponent overflow-auto p-2';
        container.style.height = '200px';
        container.innerHTML = '';
    
        state.urls.forEach((url, index) => {
            let element = document.createElement('div');
            element.className = 'elementComponent bg-light border p-2 mb-2 rounded';
            element.textContent = url.name;
            container.appendChild(element);
        });
    
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

    function ButtonsComponent(state) {
        let buttonsComponent = document.createElement('div');
        buttonsComponent.id = 'buttonsComponent';

        let fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', function(event) {
            if (event.target.files.length > 0) {
                loadURLsFromFile(event.target.files[0]);
            }
        });
        buttonsComponent.appendChild(fileInput);
        let loadFromFileButton = createButton('Загрузить из файла', 'btn-primary mb-2');
        loadFromFileButton.addEventListener('click', function() {
            fileInput.click();
        });
        buttonsComponent.appendChild(loadFromFileButton)
        function loadURLsFromFile(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result;
                const lines = fileContent.split('\n').filter(line => line.trim());
                state.urls = lines.map((url, index) => ({
                    name: `url_${index + 1}`,
                    url: url.trim()
                }));
                console.log('Updated URLs:', state);
            };
            reader.readAsText(file);
        }
        
        // Функция для загрузки URL из Local Storage
        function loadURLsFromLocalStorage() {
            const storedURLs = localStorage.getItem('urls');
            if (storedURLs) {
                state.urls = JSON.parse(storedURLs);
                console.log('URLs loaded from Local Storage:');
                state.urls.forEach((url, index) => {
                    console.log(`URL ${index + 1}: Name - ${url.name}, URL - ${url.url}`);
                });

                const elementsContainer = document.getElementById('elementsContainerComponent');
                const updatedElementsContainer = elementsContainerComponent(state);
                elementsContainer.replaceWith(updatedElementsContainer);
            }
        }
        let loadButton = createButton('Загрузить', 'btn-primary mb-2');
        loadButton.addEventListener('click', loadURLsFromLocalStorage);
        buttonsComponent.appendChild(loadButton);

        // Функция для сохранения URL в Local Storage
        function saveURLsToLocalStorage() {
            localStorage.setItem('urls', JSON.stringify(state.urls));
            console.log('URLs saved to Local Storage:');
            state.urls.forEach((url, index) => {
                console.log(`URL ${index + 1}: Name - ${url.name}, URL - ${url.url}`);
            });
        }
        let saveButton = createButton('Сохранить', 'btn-primary mb-2');
        saveButton.addEventListener('click', saveURLsToLocalStorage);
        buttonsComponent.appendChild(saveButton);

        buttonsComponent.appendChild(createButton('Рассчитать', 'btn-primary mb-2'));



        return buttonsComponent;
    }

    function MainComponent() {
        let state = {
            urls: [
                { name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
                { name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
            ],
            loadedJSON: {},
            countRows: 0,
            countColumns: 0,
            statusLoadedJSON: false,
            currentURL_ID: -1
        };

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

        menuComponent.appendChild(ButtonsComponent(state));
        menuComponent.appendChild(LoadedComponent());

        let bodyComponent = document.createElement('div');
        bodyComponent.id = 'bodyComponent';
        bodyComponent.className = 'd-flex flex-column flex-grow-1 p-3';

        let listComponent = document.createElement('div');
        listComponent.id = 'listComponent';
        listComponent.className = 'd-flex flex-column flex-grow-1 mb-3 bg-white border p-3';
        listComponent.innerHTML = '<h4>Список источников данных</h4>';
        listComponent.appendChild(URLComponent());
        listComponent.appendChild(elementsContainerComponent(state));
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
