function allResults(data){
    document.getElementById('resultid').innerHTML = "";
    for (i=0;i<10; i=i+1){
        var img = document.createElement('img');
        img.src = data.Search[i].Poster;
        img.id = 'img'+i;
        document.getElementById('resultid').appendChild(img);
    }
    console.log(document.getElementById('img'+1));
    
    
    // This is interesting. I needed to create a Immediately-Invoked Function Expression (IIFE)
    // so that I could reference the for loop parameter as an index, becuase without it
    // , function calls que up and then use last parameter(in this case 9) for all function
    // calls
    var imdid='imdid';
    for (i=0;i<10; i=i+1){
        var p = i;    
        document.getElementById('img'+i).onclick = (function (data, p){
            return function(){
                localStorage.removeItem(imdid);
                localStorage.setItem(imdid, data.Search[p].imdbID);
                resultClick(data, p,);
            }
        })(data, p);
    }
}

function resultClick(data,i){
    var myWindow = window.open('./result.html','_self');
    
    console.log(localStorage.imdid);

    
}

