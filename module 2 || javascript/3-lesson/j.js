var listItem = document.querySelector('.list');
var searchInp = document.querySelector('#search');
var authorInp = document.querySelector('#author');
var songInp = document.querySelector('#song');
var search_btn = document.querySelector('#search_btn');
var add = document.querySelector('#add');

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

//--------search
search_btn.addEventListener('click', () => {
    playlist.forEach(x => {
        if (x.author.indexOf(searchInp.value.toUpperCase()) != -1 || x.song.indexOf(searchInp.value.toUpperCase()) != -1) {
            listItem.innerHTML = `<li>${x.author}, ${x.song}</li>`;
        }
    })
    searchInp.value = '';
})

//--------update playlist array with a new value
add.addEventListener('click', () => {
    let arrayItem = {
        author: authorInp.value.toUpperCase(),
        song: songInp.value.toUpperCase()
    }
    playlist.push(arrayItem);
    authorInp.value = '';
    songInp.value = '';
})

