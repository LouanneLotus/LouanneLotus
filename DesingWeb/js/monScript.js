$(document).ready(function() {
    $('#password').keyup(function() {
        $('#result').html(checkStrength($('#password').val()))
    });
    function checkStrength(password) {
        var strength = 0;
        if (password.length < 3) {
            $('#result').removeClass();
            $('#result').addClass('court');
            return 'Votre mot est trop court'
        }
        else if (password.length >=3 && password.length < 12){
            $('#result').removeClass();
            $('#result').addClass('court');
            return ''
        }
        else if (password.length > 12){
            $('#result').removeClass();
            $('#result').addClass('Long');
            return 'Votre mot est trop long'
        }
    }

});
var li=[password.length];
$('#password').keyup(function(){

});


//faire keyup et mettre les lettres de keyup dans un tableau avec une boucle qui met dans [0] et etc.