const PassBox=document.getElementById("Password");
const ABS=8;

const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase="abcdefghijklmnopqrstuvwxyz";
const Symbol="@#$%&*^!";
const Number="1234567890";

const AllChars=UpperCase+LowerCase+Symbol+Number;

const Gen=()=>{
    let Password="";

    Password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
    Password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
    Password+=Symbol[Math.floor(Math.random()*Symbol.length)];
    Password+=Number[Math.floor(Math.random()*Number.length)];

    while(ABS>Password.length){
        Password+=AllChars[Math.floor(Math.random()*AllChars.length)];
    }
 PassBox.value=Password;   
}