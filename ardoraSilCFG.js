//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Gano"; messageTime="Tiempo fuera"; messageError="Error"; messageErrorG="Error"; messageAttempts="Limite maximo de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["Cronis-","Co-nia","Conquis-dores","Cien-ficos","-toria"];
var wIma=["","","","",""];
var audio=["","","","",""];
var w0=["dGE","bG8","dGE","dO0","SGlz"];
var w1=["c2U","c2E","emE","dGlmZQ","Q29z"];
var w2=["bW8","bGE","c2U","Zmk","aGFz"];
var w3=["Y2E","c2U","Y2E","Z2E","Y2Fz"];
var c=[2,2,2,2,3];
var wW=["Incorrecto","Incorrecto","Incorrecto","Incorrecto","Incorrecto"];
var dirMedia="Complete_resources/media/";
var wordsGame="Q29tcGxldGU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
