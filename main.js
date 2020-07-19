const apiurl = "http://www.omdbapi.com/?apikey=e172f5ff&";


// Change them background colors, with .5s fade time between color swaps
var button = document.getElementById('button');
button.addEventListener('click', buttonClick);

var backgroundChange = 1;
function buttonClick(){
    if(backgroundChange == 0){
        document.body.style.backgroundColor = '#efc9af';
        document.body.style.transition = 'background-color 500ms linear';
        button.textContent = 'Dark Mode';
        backgroundChange = 1;
    } else{
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.transition = 'background-color 500ms linear';
        button.textContent = 'Light Mode';
        backgroundChange = 0;
    }
}

//Get search result string and call search json
var search = document.getElementById('search');
search.addEventListener('keyup', searchEnter);

function searchEnter(e){
    if (e.keyCode == 13){
        var searchString = e.target.value;
        searchResults(searchString);        //Search file
    }
    console.log(searchString);
}

