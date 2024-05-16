$(document).ready(function(){
    $('form').on('submit', function(event){
        event.preventDefault() // Stopping the submit event 
        let email = $('#email').val() // Getting the email value 
        let emptyImput = []; // an empty array to put any empty field 
        $('.check-input').each(function(index, element){ // looking if there's any empty array on form 
            if($(element).val().trim() === ''){
                emptyImput.push(element); // Put the empty array at the variable 
            }
        });

        if(emptyImput.length > 0){ // Giving a feedback to the user
            alert("There's " + emptyImput.length + ' empyt input(s).');
            $(emptyImput).css('border', '1px solid hsl(0, 100%, 74%)');
            $(emptyImput).attr('placeholder', 'This field is empty')
        }else if(!isEmail(email)){ // Checking email
            alert('This is an invalid email')
            $('#email').css('border', '1px solid hsl(0, 100%, 74%)');
        }else { // If it's all ok, submit form 
            alert('Form submited')
            $('form').off('submit').submit();
        }
        
        
    });


    function isEmail(email) { // Function to validade email
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
})