$(document).ready(function(){


    $("#register_form").on("submit",function(){
        var status = false;
        var fullname = $("#fullname");
        var name = $("#username");
        var email = $("#email");
        var password = $("#password");
        var confirmPassword = $("#confirmpassword");
        var country = $("#country");
        var name_pattern = new RegExp(/^[A-Za-z ]+$/);
        var email_pattern = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);
        var phoneno = /^\d{10}$/;
        var mobilenumber = $("#mobilenumber");
        var package = $("#package");
        var refered = $("#refered");
    
        if(fullname.val() == "" || fullname.val().length < 6){
            name.addClass("border-danger");
            $("#fullname_error").html("<span class='text-danger'>Please enter fullname and fullname should be more than 6 characters</span>");
            status = false;
          }else{
           fullname.removeClass("border-danger");
           $("#fullname_error").html("");
           status = true;
          }
    
        if(name.val() == "" || name.val().length < 4){
          name.addClass("border-danger");
          $("#username_error").html("<span class='text-danger'>Please enter a username it should be more that 4 characters</span>");
          status = false;
        }else{
         name.removeClass("border-danger");
         $("#username_error").html("");
         status = true;
        }

        if(!phoneno.test(mobilenumber.val())){
            mobilenumber.addClass("border-danger");
            $("#mobilenumber_error").html("<span class='text-danger'>Please enter a valid phone number</span>");
            status = false;
          }else{
           mobilenumber.removeClass("border-danger");
           $("#mobilenumber_error").html("");
           status = true;
          }
    
        //test() is a function of regular expression
        if(!email_pattern.test(email.val())){
         email.addClass("border-danger");
         $("#email_error").html("<span class='text-danger'>Please enter a valid email Address</span>");
         status = false;
       }else{
        email.removeClass("border-danger");
        $("#email_error").html("");
        status = true;
       }
    
       if(password.val() == "" || password.val().length < 9){
         password.addClass("border-danger");
         $("#password_error").html("<span class='text-danger'>Please enter a more than nine digit password </span>");
         status = false;
       }else{
        password.removeClass("border-danger");
        $("#password_error").html("");
        status = true;
       }
    
       if(confirmPassword.val() == "" || confirmPassword.val().length < 9){
         confirmPassword.addClass("border-danger");
         $("#confirmpassword_error").html("<span class='text-danger'>Please confirm your password</span>");
         status = false;
       }else{
        confirmPassword.removeClass("border-danger");
        $("#confirmpassword_error").html("");
        status = true;
       }
    
       if(country.val() == "" ){
         country.addClass("border-danger");
         $("#country_error").html("<span class='text-danger'>Please choose a country</span>");
         status = false;
       }else{
        country.removeClass("border-danger");
        $("#country_error").html("");
        status = true;
       }

       if(package.val() == "" ){
        package.addClass("border-danger");
        $("#package_error").html("<span class='text-danger'>Please choose a package</span>");
        status = false;
      }else{
       package.removeClass("border-danger");
       $("#package_error").html("");
       status = true;
      }

      if(refered.val() == "" ){
        refered.addClass("border-danger");
        $("#refered_error").html("<span class='text-danger'>Please enter the person who refered you</span>");
        status = false;
      }else{
       refered.removeClass("border-danger");
       $("#refered_error").html("");
       status = true;
      }

      if(!$("#agreement").prop("checked")){
        $("#agreement").addClass("border-danger");
        $("#agreement_error").html("<span class='text-danger'>You must agree to the Terms</span>");
        status = false;
      }else{
        $("#agreement").removeClass("border-danger");
        $("#agreement_error").html("");
        status = true;
      }
    
       if((password.val() == confirmPassword.val()) && status == true){
            alert("Every field is entered");
       }else{
         confirmPassword.addClass("border-danger");
         $("#confirmpassword_error").html("<span class='text-danger'>Passwords do not match</span>");
         status = false;
       }
      })

      $("#login_form").on("submit", function(){
          var status = false;
          var login_username = $("#login_username");
          var login_password = $("#login_password");

          if(login_username.val() == ""){
              login_username.addClass("border-danger");
              $("#login_username_error").html("<span class='text-danger'>Please enter your username</span>");
              status = false;
          }else{
              login_username.removeClass("border-danger");
              $("#login_username_error").html("");
              status = true;
          }

          if(login_password.val() == ""){
            login_password.addClass("border-danger");
            $("#login_password_error").html("<span class='text-danger'>Please enter your password</span>");
            status = false;
            }else{
            login_password.removeClass("border-danger");
            $("#login_password_error").html("");
            status = true;
            }
      })

      $("#contact_form").on("submit", function(){
        var status = false;
        var contact_name = $("#contact_name");
        var contact_email = $("#contact_email");
        var contact_subject = $("#contact_subject");
        var contact_message = $("#contact_message");
        var email_pattern = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);

        if(contact_name.val() == ""){
            contact_name.addClass("border-danger");
            $("#contact_name_error").html("<span class='text-danger'>Please enter your name</span>");
            status = false;
        }else{
            contact_name.removeClass("border-danger");
            $("#contact_name_error").html("");
            status = true;
        }

        //test() is a function of regular expression
        if(!email_pattern.test(contact_email.val())){
            contact_email.addClass("border-danger");
            $("#contact_email_error").html("<span class='text-danger'>Please enter a valid email address</span>");
            status = false;
        }else{
        contact_email.removeClass("border-danger");
        $("#contact_email_error").html("");
        status = true;
        }

        if(contact_subject.val() == ""){
            contact_subject.addClass("border-danger");
            $("#contact_subject_error").html("<span class='text-danger'>Subject required</span>");
            status = false;
        }else{
            contact_subject.removeClass("border-danger");
            $("#contact_subject_error").html("");
            status = true;
        }

        if(contact_message.val() == ""){
          contact_message.addClass("border-danger");
          $("#contact_message_error").html("<span class='text-danger'>Please enter your message</span>");
          status = false;
          }else{
          contact_message.removeClass("border-danger");
          $("#contact_message_error").html("");
          status = true;
          }
    })

    $("#dashboard-contact-form").on("submit", function(){
        var status = false;
        var contact_name = $("#contact_name");
        var contact_email = $("#contact_email");
        var contact_subject = $("#contact_subject");
        var contact_message = $("#contact_message");
        var email_pattern = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);

        if(contact_name.val() == ""){
            contact_name.addClass("border-danger");
            $("#contact_name_error").html("<span class='text-danger'>Please enter your name</span>");
            status = false;
        }else{
            contact_name.removeClass("border-danger");
            $("#contact_name_error").html("");
            status = true;
        }

        //test() is a function of regular expression
        if(!email_pattern.test(contact_email.val())){
            contact_email.addClass("border-danger");
            $("#contact_email_error").html("<span class='text-danger'>Please enter a valid email address</span>");
            status = false;
        }else{
        contact_email.removeClass("border-danger");
        $("#contact_email_error").html("");
        status = true;
        }

        if(contact_subject.val() == ""){
            contact_subject.addClass("border-danger");
            $("#contact_subject_error").html("<span class='text-danger'>Subject required</span>");
            status = false;
        }else{
            contact_subject.removeClass("border-danger");
            $("#contact_subject_error").html("");
            status = true;
        }

        if(contact_message.val() == ""){
          contact_message.addClass("border-danger");
          $("#contact_message_error").html("<span class='text-danger'>Please enter your message</span>");
          status = false;
          }else{
          contact_message.removeClass("border-danger");
          $("#contact_message_error").html("");
          status = true;
          }
    })

    $("#mpesa-form").on("submit",function(){
        var status = false;
        var number = $("#number");
        var amount = $("#amount");
        var phoneno =  /^\d{10}$/;

        if(!phoneno.test(number.val())){
            number.addClass("border-danger");
            $("#phonenumber_error").html("<span class='text-danger'>Please enter a valid phone number</span>");
            status = false;
          }else{
           number.removeClass("border-danger");
           $("#phonenumber_error").html("");
           status = true;
          }

          if(amount.val() == ""){
              amount.addClass("border-danger");
              $("#amount_error").html("<span class='text-danger'>Amount cannot be empty!</span>");
              status = false;
          }else{
              amount.removeClass("border-danger");
              $("#amount_error").html("");
              status = true;
          }
    })

    $("#spin_form").on("submit", function(){
      var status = false;
      var spinAmount = $("#spin_amount");

      if(spinAmount.val() == "" || spinAmount.val() < 20){
        spinAmount.addClass("border-danger");
        $("#spin_error").html("<span class='text-danger'>Please enter your amount, it should be a minimum of Ksh 20</span>");
        status = false;
      }else{
        spinAmount.removeClass("border-danger");
        $("#spin_error").html("");
        status = true;
      }
    })
})