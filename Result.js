console.log(localStorage.imdid);
fetch('http://www.omdbapi.com/?apikey=e172f5ff&i='+localStorage.imdid)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // Work with JSON data here
          console.log(data);
          
          var img = document.createElement('img');
          img.src = data.Poster;
          
          document.getElementById('image').appendChild(img);
          var Title = document.createElement('span');
          Title.innerHTML = data.Title + "  (" + data.Year + ")";
          document.getElementById('title').appendChild(Title);
          var Rating = document.createElement('p');
          Rating.innerHTML = "IMDb: "+ data.Ratings[0].Value + "<br>" + "Rotten Tomatoes Critic: "+data.Ratings[1].Value +"<br>" +"Metacritic: "+ data.Ratings[2].Value;
          document.getElementById('rating').appendChild(Rating);
          var Plot = document.createElement('p');
          Plot.innerHTML = data.Plot;
          document.getElementById('plot').appendChild(Plot);


        })
        .catch((err) => {
          // Do something for an error here
        })    


/*
var img = document.createElement('img');
img.src = data.Search[i].Poster;
img.id = 'img'+i;
document.getElementById('resultid').appendChild(img);

          var img = document.createElement('img');
          img.src = data.Search[i].Poster;
          document.getElementById('resultid').appendChild(img);
*/

var button = document.getElementById('button');
button.addEventListener('click', buttonClick);

var backgroundChange = 1;
function buttonClick(){
    if(backgroundChange == 0){
        document.body.style.backgroundColor = '#efc9af';
        document.body.style.transition = 'background-color 500ms linear';
        document.getElementById('rating').style.color ='black';
        document.getElementById('rating').style.fontWeight ='bold';
        document.getElementById('plot').style.color = 'black';
        document.getElementById('plot').style.fontWeight ='bold';
        button.textContent = 'Dark Mode';
        backgroundChange = 1;
    } else{
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.transition = 'background-color 500ms linear';
        document.getElementById('rating').style.color ='white';
        document.getElementById('rating').style.fontWeight ='normal';
        document.getElementById('plot').style.color = 'white';
        document.getElementById('plot').style.fontWeight ='normal';
        button.textContent = 'Light Mode';
        backgroundChange = 0;
    }
}