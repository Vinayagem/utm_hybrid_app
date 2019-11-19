
//login
function login() {
        var email = document.getElementById('txtemail').value;

        var password = document.getElementById('txtpassword').value;

        if (email.trim() == "" || password.trim() == "") {
          $.alert({
            title: 'Empty!',
            content: 'Either Email or Password is not filled. Please check and try again.',
            closeIcon: true
          });
        } else {


          if (ValidateEmail(email) == true) {
            var getresultsurl = "http://192.168.43.204/coursework/login.php?email=" + email + "&password=" + password;
            $.get(getresultsurl, function(data, status) {

              if (data == "Success") {
                location.href = '#dashboard';
              } else {
                $.alert({
                  title: 'Error!',
                  content: data,
                  closeIcon: true
                });
              }
            });
          } else {
            $.alert({
              title: 'Error!',
              content: "Email is not valid. Please enter a good one and try again.",
              closeIcon: true
            });
          }
        }
      }

      function check() {
        var getresultsurl = "http://192.168.43.204/coursework/login.php?operation=" + 11;
        $.get(getresultsurl, function(data, status) {
          if (data == "Exist") {
            location.href = '#dashboard';
          } else {}
        });
      }

      //Email Validation
      function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
          return true;
        }
        return false;
      }


// dashboard


    function myFunction() {
     var x = document.getElementById("myLinks");
     if (x.style.display === "block") {
       x.style.display = "none";
     } else {
       x.style.display = "block";
     }
    }

//admin adminlogin
function adminlogin() {
        var email = document.getElementById('txtemail').value;

        var password = document.getElementById('txtpassword').value;

        if (email.trim() == "" || password.trim() == "") {
          $.alert({
            title: 'Empty!',
            content: 'Either Email or Password is not filled. Please check and try again.',
            closeIcon: true
          });
        } else {


          if (ValidateEmail(email) == true) {
            var getresultsurl = "http://192.168.43.204/coursework/login.php?email=" + email + "&password=" + password;
            $.get(getresultsurl, function(data, status) {

              if (data == "Success") {
                location.href = '#admindashboard';
              } else {
                $.alert({
                  title: 'Error!',
                  content: data,
                  closeIcon: true
                });
              }
            });
          } else {
            $.alert({
              title: 'Error!',
              content: "Email is not valid. Please enter a good one and try again.",
              closeIcon: true
            });
          }
        }
      }
