const jokebutton=document.getElementById('jokeButton');
const joke=document.getElementById('joke');

const apikey='Pz9sE8JtNyYvPpMrHSi49A==bLP7eDFZEIk2KrL3';
const apiurl='https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options={
    method:'GET',
    headers:{
        'X-Api-Key':apikey
    }

}
 async function getJoke(){
    try {
        joke.textContent='updating..';
        jokebutton.textContent='Loading..';
        jokebutton.disabled=true;
    
       const response= await fetch(apiurl,options);
       const data= await response.json();
    
       jokebutton.disabled=false;
       jokebutton.textContent='Tell me a joke';
       joke.textContent=data[0].joke;
    } catch (error) {
        
        joke.textContent='Try again later';

        jokebutton.disabled=false;
       jokebutton.textContent='Tell me a joke';
    }
 
 }

 jokebutton.addEventListener('click',getJoke)