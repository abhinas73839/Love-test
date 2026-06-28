))*100);

document.getElementById("score").innerHTML=percent+"% ❤️";

document.getElementById("bar").style.width=percent+"%";

let msg="";

if(percent>=90){

msg="💖 Soulmate Level! You are loyal, caring & trustworthy.";

}else if(percent>=70){

msg="💕 Great! Your relationship has a strong foundation.";

}else if(percent>=50){

msg="💛 Good! A little more trust and communication can make it even better.";

}else{

msg="💔 Don't worry! This quiz is just for fun. Every relationship is unique.";

}

document.getElementById("message").innerHTML=msg;

}
