function collectData(){
   
    // hiding form 

    document.getElementById("display").style.display = "none"
  
    // getting data 
    let fName = document.getElementById("fName").value;
    let faName = document.getElementById("faName").value;
    let rollno = document.getElementById("rollno").value;

// getting element to put above data in marksheet 

    let name = document.getElementById("name");
    let fagetname = document.getElementById("fagetname");
    let rollget = document.getElementById("rollget");

// getting subjects

    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;
    let subject4 = document.getElementById("subject4").value;
    let subject5 = document.getElementById("subject5").value;
   
// gettng marks 

    let masubject1 = document.getElementById("masubject1").value;
    let masubject2 = document.getElementById("masubject2").value;
    let masubject3 = document.getElementById("masubject3").value;
    let masubject4 = document.getElementById("masubject4").value;
    let masubject5 = document.getElementById("masubject5").value;

//  alerting if marks or any data not entered 
     
   let markSheet = document.getElementById("markSheet");
   let getmsg2 = document.getElementById("msg2");


if (masubject1 == "" || masubject2 == "" || masubject3 == "" || masubject4 == "" || masubject5 == "" || fName == "" || faName == "" || rollno == "") {
    getmsg2.style.display = "block";
    document.getElementById("display").style.display = "block"

}else{
    markSheet.style.display = "block";
  
    document.getElementById("printBtn").style.display = "block";
}
    

// getting percentage row
    let percent1 = document.getElementById("percent1");
    let percent2 = document.getElementById("percent2");
    let percent3 = document.getElementById("percent3");
    let percent4 = document.getElementById("percent4");
    let percent5 = document.getElementById("percent5");
    


// to put subject name getting subject element 
    let subjectGet1 = document.getElementById("subjectGet1");
    let subjectGet2 = document.getElementById("subjectGet2");
    let subjectGet3 = document.getElementById("subjectGet3");
    let subjectGet4 = document.getElementById("subjectGet4");
    let subjectGet5 = document.getElementById("subjectGet5");

// to put subject marks name getting subject marks element 

    let magetsubject1 = document.getElementById("magetsubject1");
    let magetsubject2 = document.getElementById("magetsubject2");
    let magetsubject3 = document.getElementById("magetsubject3");
    let magetsubject4 = document.getElementById("magetsubject4");
    let magetsubject5 = document.getElementById("magetsubject5");

    let grade1 = document.getElementById("grade1");
    let grade2 = document.getElementById("grade2");
    let grade3 = document.getElementById("grade3");
    let grade4 = document.getElementById("grade4");
    let grade5 = document.getElementById("grade5");



    subjectGet1.innerHTML = subject1;
    subjectGet2.innerHTML = subject2;
    subjectGet3.innerHTML = subject3;
    subjectGet4.innerHTML = subject4;
    subjectGet5.innerHTML = subject5;
    
    magetsubject1.innerHTML = masubject1;
    magetsubject2.innerHTML = masubject2;
    magetsubject3.innerHTML = masubject3;
    magetsubject4.innerHTML = masubject4;
    magetsubject5.innerHTML = masubject5;
    

    name.innerHTML = fName;
    fagetname.innerHTML = faName;
    rollget.innerHTML = rollno;

// calculating percentage 
    let per1 = (masubject1/100)*100;
    let per2 = (masubject2/100)*100;
    let per3 = (masubject3/100)*100;
    let per4 = (masubject4/100)*100;
    let per5 = (masubject5/100)*100;
    let per1fix = per1.toFixed();
    let per2fix = per2.toFixed();
    let per3fix = per3.toFixed();
    let per4fix = per4.toFixed();
    let per5fix = per5.toFixed();
  
    percent1.innerHTML = per1fix;
    percent2.innerHTML = per2fix;
    percent3.innerHTML = per3fix;
    percent4.innerHTML = per4fix;
    percent5.innerHTML = per5fix;
     
// calculating grading 

    if (per1fix > 80){
        grade1.innerHTML = "A+ grade";
    }else if (per1fix > 70){
        grade1.innerHTML = "A grade";
    }else if (per1fix > 60){
        grade1.innerHTML = "B grade";
    }else if (per1fix > 50){
        grade1.innerHTML = "D grade";
    }else{
        grade1.innerHTML = "Fail";
    }

    if (per2fix > 80){
        grade2.innerHTML = "A+ grade";
    }else if (per2fix > 70){
        grade2.innerHTML = "A grade";
    }else if (per2fix > 60){
        grade2.innerHTML = "B grade";
    }else if (per2fix > 50){
        grade2.innerHTML = "D grade";
    }else {
        grade2.innerHTML = "Fail";
    }

    if (per3fix > 80){
        grade3.innerHTML = "A+ grade";
    }else if (per3fix > 70){
        grade3.innerHTML = "A grade";
    }else if (per3fix > 60){
        grade3.innerHTML = "B grade";
    }else if (per3fix > 50){
        grade3.innerHTML = "D grade";
    }else{
        grade3.innerHTML = "Fail";
    }

    if (per4fix > 80){
        grade4.innerHTML = "A+ grade";
    }else if (per4fix > 70){
        grade4.innerHTML = "A grade";
    }else if (per4fix > 60){
        grade4.innerHTML = "B grade";
    }else if (per4fix > 50){
        grade4.innerHTML = "D grade";
    }else {
        grade4.innerHTML = "Fail";
    }

    if (per5fix > 80){
        grade5.innerHTML = "A+ grade";
    }else if (per5fix > 70){
        grade5.innerHTML = "A grade";
    }else if (per5fix > 60){
        grade5.innerHTML = "B grade";
    }else if (per5fix > 50){
        grade5.innerHTML = "D grade";
    }else{
        grade5.innerHTML = "Fail";
    }
   

// calculating overall percentage 
    
    let totalobtMarks = Number( masubject1 )+ Number( masubject2 ) + Number( masubject3 ) + Number( masubject4 ) + Number( masubject5 );
    let gettotalobtmarks = document.getElementById("totalobtmarks");
    gettotalobtmarks.innerHTML = totalobtMarks;
    let getoverallpercentage = document.getElementById("overallpercentage");
    let overallpercentage =  (totalobtMarks/500) * 100;

    // calculating overall grade pass 

    let overallgradepass = document.getElementById("overallgradepass");
     
    if (overallpercentage > 80) {
        overallgradepass.innerHTML = "Passed with A-ONE grade";
    }else if (overallpercentage > 70){
        overallgradepass.innerHTML = "Passed with B grade";
    }else if (overallpercentage > 60){
        overallgradepass.innerHTML = "Passed with C grade";
    }else if (overallpercentage > 50){
        overallgradepass.innerHTML = "Passed with D grade";
    }else{
        overallgradepass.innerHTML = "You Failed";
    }
    
    if (overallpercentage > 80) {
        getoverallpercentage.innerHTML = overallpercentage.toFixed()+"%";
    }else if (overallpercentage > 70){
        getoverallpercentage.innerHTML = overallpercentage.toFixed()+"%";
    }else if (overallpercentage > 60){
        getoverallpercentage.innerHTML = overallpercentage.toFixed()+"%";
    }else if (overallpercentage > 50){
        getoverallpercentage.innerHTML = overallpercentage.toFixed()+"%";
    }else{
        getoverallpercentage.innerHTML = overallpercentage.toFixed()+"%";
    }


}

// confirming all subjects function

function confirmSubject(){
    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;
    let subject4 = document.getElementById("subject4").value;
    let subject5 = document.getElementById("subject5").value;
    let getMsg = document.getElementById("msg");
    let innerWrap = document.getElementById("innerWrap")

    if (subject1 == "" || subject2 == "" || subject3 == "" || subject4 == "" || subject5 == "") {
        getMsg.style.display = "block";
    }else{
        innerWrap.style.display = "block";
        getMsg.style.display = "none";
     
    }


    let subjectName1 = document.getElementById("subjectName1");
    let subjectName2 = document.getElementById("subjectName2");
    let subjectName3 = document.getElementById("subjectName3");
    let subjectName4 = document.getElementById("subjectName4");
    let subjectName5 = document.getElementById("subjectName5");
    
    
    subjectName1.innerHTML = subject1;
    subjectName2.innerHTML = subject2;
    subjectName3.innerHTML = subject3;
    subjectName4.innerHTML = subject4;
    subjectName5.innerHTML = subject5;
    
    
     
    
}