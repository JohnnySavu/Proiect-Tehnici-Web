var quiz = [
    {
        intrebare : "Which of the following books are written by Lev Tolstoi?",
        raspunsuri : [["War and Peace", true], ["Crime and punishment", false], ["Dread Souls", false], ["Anna Karenina", true]
                    ,["Karamazov Brothers", false], ["The death of Ivan Ilyich", true]]
    },
    {
        intrebare : "Who is the author of the book 'The Stranger'?",
        raspunsuri : [["J.D. Salinger", false], ["Albert Camus", true], ["Murakami", false], ["Ernest Hamingway", false]]
    },
    {
        intrebare : "Who is the main character of 'The book thief'?",
        raspunsuri : [["Markus Zusak", false], ["Joseph K", false], ["Liesel Meminger", true], ["Elizabeth Bennet", false]] 
    },
    {
        intrebare : "What is the origin of the author Franz Kafka?",
        raspunsuri : [["German", false], ["British", false], ["Czech", true], ["Dutch", false]]
    },
    {
        intrebare : "Who wrote a 'Midsummer night's dream'?",
        raspunsuri : [["Jane Austen", false], ["William Shakespeare", true], ["Charlotte Bronte", false], ["Oscar Wilde", false]]
    }
]

function display_quiz()
{
    let main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div'> 
        <ol id = "main-quiz-ol" style = "text-align:left">
 
            </ol>
    </main>`;
    main = document.getElementById('main-quiz-ol');
    for (let i = 0; i < quiz.length; i++)
    {

        main.innerHTML += "<li>" + quiz[i].intrebare + "<ol type = 'a'> </ol> </li>";
        let ans = main.lastChild;
        ans = ans.getElementsByTagName("ol")[0];
        for (let j = 0; j < quiz[i].raspunsuri.length; j++)
        {
            ans.innerHTML +=`<li><input type='checkbox' name = '${j}'> <label for = '${j}'>` + quiz[i].raspunsuri[j][0] + `</label></li>`
        }

    }
    main = main.parentElement;
    main.innerHTML += '<button type = "button" class = "submit-button" id = "get-result-btn">Show result</button>';
    document.getElementById("get-result-btn").addEventListener("click", function(){
        getResult();
    });

}


function getResult()
{
    let score = 0;
    let count_quiz = 0;
    let count_ans = 0;
    let intrebari = document.getElementById("main-quiz-ol").children;
    //console.log(intrebari);
    //console.log(intrebari[0]);
    for (let i = 0; i < intrebari.length; i++)
    {
        let intrebare = intrebari[i];
        //console.log(intrebare.innerHTML);
        let raspunsuri = intrebare.getElementsByTagName("ol")[0].children;
        let ok = 1;
        for (let j = 0; j < raspunsuri.length; j++)
        {
            let raspuns = raspunsuri[j];
            //console.log(raspuns.getElementsByTagName("input")[0].checked);
            if (quiz[i].raspunsuri[j][1] && !raspuns.getElementsByTagName("input")[0].checked)
            {
                ok = 0;
            }
            if (!quiz[i].raspunsuri[j][1] && raspuns.getElementsByTagName("input")[0].checked)
            {
                ok = 0;
            }
            raspuns.getElementsByTagName("input")[0].disabled = true;

        }
        if (ok == 1)
            score += 1;
    }
    let main = document.getElementsByClassName("main-div")[0];
    main.innerHTML += `<p style = 'font-size:40px'">Your score is: ${score} </p>`;
}


document.addEventListener("click", function(e)
{
    if (e.target && e.target.id == 'go-quiz-btn')
    {
        display_quiz();
    }

});