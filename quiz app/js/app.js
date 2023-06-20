const questions=[
{
    'que':"Which of the following is a markup language?",
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    correct:"b"},
{
    'que':"which year was CSS launched?",
    'a':'1996',
    'b':'1997',
    'c':'1998',
    'd':'1998',
    'correct':"b"
},
{
    'que':"What does CSS stand for?",
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    correct:"b"
}
];

const quebox=document.getElementById("quesbox");
let index=2;
const optioninputs=document.querySelectorAll(".options");
const loadQuestion=()=>{
    const data=questions[index];
    // console.log(data);
    quebox.innerText=`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;

}

const submitQuiz=()=>{
    const ans=getAnswer()
}

const getAnswer=()=>{
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                console.log(input.value)
            }
            
        }
    )
}
loadQuestion();