function sendData(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    
     var emailpattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     var passpattern=/^[A-Za-z]\w{7,15}$/
 
    if(emailpattern.test(email)){
        document.getElementById("usermsg").innerHTML=""
    }
    else{
        document.getElementById("usermsg").innerHTML="Please Enter your Email"
    }


    if(passpattern.test(pass)){
        document.getElementById("passmsg").innerHTML=""
    }
    else{
        document.getElementById("passmsg").innerHTML="Please Enter your Password"

    } 


}        