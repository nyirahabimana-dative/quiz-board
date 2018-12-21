$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var answers = [];

        $('.correct').each(function () {
            answers.push($(this).prop('checked'));
        })

        console.log(answers);


        $('#result').text("Your score is "+ getScore(answers));
    })
});
function getScore(answers) {
    var score = 0;

    answers.forEach(function(answer) {
        if (answer === true) {
            score+10;
        }
    });

    return score;
}