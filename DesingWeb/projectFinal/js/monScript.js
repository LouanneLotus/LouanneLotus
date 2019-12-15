$(document).ready(function() {
    $('#email').keyup(function() {
        $('#result').html(checkStrength($('#email').val()))
    });
    function checkStrength(email) {
        var strength = 0;
        if (email.includes('@' && '.')) {
            $('#result').removeClass();
            $('#result').addClass('court');
            return ''
        }
        else {
            $('#result').removeClass();
            $('#result').addClass('colorred');
            return 'Votre email doit contenir un "@" et un "."'
        }
    }

});