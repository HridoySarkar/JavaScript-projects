const quizData = [
    {
        question: "How old are you?",
        a: '10',
        b: '17',
        c: '18',
        d: '20',
        correct: 'd'
    },{
        question: "Which is your Name?",
        a: 'Hridoy',
        b: 'Mahim',
        c: 'Jeba',
        d: 'Tonny',
        correct: 'a'
    },{
        question: "Which is the best place in your city?",
        a: 'Housing',
        b: 'PDB',
        c: 'Nau Gath',
        d: 'HTC',
        correct: 'a'
    },{
        question: "How old are you",
        a: '10',
        b: '17',
        c: '18',
        d: '20',
        correct: 'd'
    },{
        question: "How old are you",
        a: '10',
        b: '17',
        c: '18',
        d: '20',
        correct: 'd'
    },{
        question: "How old are you",
        a: '10',
        b: '17',
        c: '18',
        d: '20',
        correct: 'd'
    }
]

const questionEl = document.getElementById('question')

const a_text =  document.getElementById('a_text')
const b_text =  document.getElementById('b_text')
const c_text =  document.getElementById('c_text')
const d_text =  document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}


function getSelected(){
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}


submitBtn.addEventListener('click',() =>{
    const answer = getSelected();   
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
                loadQuiz();
            }else{
                Swal.fire(
                    'Good job!',
                    'You Finished all questions' +' '+ 'Your score ' + score,
                    'success'
                );
            document.getElementById('submit').disabled = true
            document.getElementById('submit').style.backgroundColor = "#a27ab3"
        }
    }

    
})
