var listItem = document.querySelector('.list');
var playlist = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

//************output entire array */
/*
playlist.forEach(x => {
    listItem.innerHTML += `<li>${x.author}, ${x.song};</li>`;
});
*/

//************output on prompt */

var search = prompt('What are you looking for?');

function myFunc (x) {
    for(let i = 0; i < playlist.length; i++) {
        if(playlist[i].author.indexOf(x) != -1 || playlist[i].song.indexOf(x) != -1) {
            listItem.innerHTML = `${playlist[i].author}, ${playlist[i].song}`;
        }
    }
}

myFunc(search);


/*******output on input  */
/*
inp.addEventListener('input', () => {
    let search = inp.value;
    for(let i = 0; i < playlist.length; i++) {
        if(playlist[i].author.indexOf(search) != -1 || playlist[i].song.indexOf(search) != -1) {
            listItem.innerHTML = `${playlist[i].author}, ${playlist[i].song}`;
        }
    }
})
*/
