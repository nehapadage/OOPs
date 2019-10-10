var fs=require('fs');
var util=require('../OOPs/OOPsUtility')
var flag=true;
var read=require('readline-sync');
var clinic_util=require('../OOPs/ClinicUtility')


class clinic
{
  ClinicManagement()
  {
   try{
          
          var data=fs.readFileSync('/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Clinic.json')
              
          var clinic_object=JSON.parse(data);
          //  console.log(clinic_object);
          var option;
  
       do
       {
       console.log("**********Clinic Management System***************************");
       console.log("1.Appointment\t2.Print\t3.Search\t4.Save");
       console.log("Enter your option");
       option=read.questionInt();
      
       switch(option)
       {
           case 1:  
                clinic_util.AppointMent(clinic_object);
                  break;
         
           case 2: var ch;
                  do{
                      ch=read.questionInt("1.Doctor List\t2.Patient List\nEnter your choice");
                    }while(ch<1||ch>2)
  
                    if(ch==1){
                      clinic_util.allDoctors(clinic_object);
                    }
                    if(ch===2){
                      clinic_util.allPatients(clinic_object);
                    }
                  break;
         
          case 3: var ch;
                  do{
                  ch=read.questionInt("1.Enter 1 to search Doctor\t 2.Enter 2 to search Patient");
                   }while(ch<1||ch>2)
  
                  if(ch===1){
                      clinic_util.SearchDoctor(clinic_object);
                   }
                  if(ch===2){
                      clinic_util.SearchPatient(clinic_object);
                  }
                   break;
  
          case 4:
                  clinic_util.saveFile(clinic_object);
                  break;
  
          default : console.log("Enter valid Input");
                  break;
          
       }
      
      }while(option>=5)
   
  }
   
   catch(error)
   {
      //console.log("File not found");
      flag=false;     
   }
  }
}
module.exports={clinic}
var cli=new clinic();
cli.ClinicManagement(); 
 


