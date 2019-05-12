var next1 = document.getElementById('next_1');
var next2 = document.getElementById('next_2');
var next3 = document.getElementById('next_3');
var next4 = document.getElementById('next_4');
var show_results = document.getElementById('show_result');
var finalResult = document.getElementById('result')

var test = document.querySelector('.test');

window.addEventListener('click', (x) => {
    if(x.target == next1) {
        test.style.transform = 'translateY(-350px)';
    } else if (x.target == next2) {
        test.style.transform = 'translateY(-700px)';
    } else if (x.target == next3) {
        test.style.transform = 'translateY(-1050px)';
    } else if (x.target == next4) {
        test.style.transform = 'translateY(-1400px)';
    } else if (x.target == show_results) {
        test.style.transform = 'translateY(-1750px)';
        
        let a1 = document.getElementById('q1a2').checked;
        let a2 = document.getElementById('q2a1').checked;
        let a3 = document.getElementById('q3a3').checked;
        let a4 = document.getElementById('q4a3').checked;
        let a5 = document.getElementById('q5a3').checked;

        let answers = [a1, a2, a3 ,a4, a5];

        let final = answers.filter(Boolean).length;

        finalResult.innerHTML = `You got ${final} question(s) right`;  
    } 
});
