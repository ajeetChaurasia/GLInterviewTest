$(document).ready(function () {
    $("#registartionForm").validate({
        rules: {
            "fname": {
                required: true
            },
            "email": {
                required: true,
                email: true
            },
            "mobileNumber" : {
                required : true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            "experience" : {
                required : true
            },
            "designation" : {
                required : true
            },
            "organisation" : {
                required : true
            },
            "qualification" : {
                required : true
            },
            "agree" : {
                required : true
            }

        },
        messages: {
            "fname": {
                required: "Please, enter name"
            },
            "email": {
                required: "Please, enter an email",
                email: "Invalid Email"
            },
            "mobileNumber" : {
                required : "Please, enter Mobile Number",
                number : "Invalid Number",
                minlength: "Invalid Number",
                maxlength: "Invalid Number"
            },
            "experience" : {
                required : "Please, select Experience"
            },
            "designation" : {
                required : "Please, enter Designation"
            },
            "organisation" : {
                required : "Please, enter Organisation"
            },
            "qualification" : {
                required : "Please, select Qualification"
            },
            "agree" : {
                required : "Please check this box"
            }
        },
        submitHandler: function(form) {
            SubmitFunction();
          }
    });

    function SubmitFunction() {
        alert('Form Submitted sucessfully');
    }

    $('#registartionForm').submit(function(e){     
          e.preventDefault();
          var $form = $(this);
      
          if($form.valid()){
            alert("form data is valid");
            $.ajax({
                type: 'POST',
                url: 'demo_test_post.asp',
                data: {
                    name: "Donald Duck",
                    city: "Duckburg"
                  },
                success: function(data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                }
        
            });
          } else {
            alert('Invalid Form Data')
            return false;
          }
          
      });

});
