function searchResults(search){
        fetch('http://www.omdbapi.com/?apikey=e172f5ff&s='+search)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // Work with JSON data here
          console.log(data); 
          allResults(data);     //AllResults file

        })
        .catch((err) => {
          // Do something for an error here
        })    

}

