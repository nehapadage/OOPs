
var read = require('readline-sync');
var fs = require('fs');


module.exports = {

    /**
    * @description this method is For Taking Appointment And Add to Patient
    * @param Object jsons Parser
    * @returns arrays
    */
    AppointMent(Clinic) {
        var date = new Date();

            var Name = read.question('Patient Name: ');
        

        /*
         * generating ID using random function 
         */
        var ID = parseInt(Math.random() * 1000);

        var mobNo = read.question('Mobile Number: ');

        var Age = read.question('Age: ');
    

        // question to Patient who Want to take Appointment 
        do {
            var appointment = read.question("Do you want to take appointment:(type y or n): ");
            if (appointment != "y" && appointment != "n")
                console.log("** Invalid");
        } while (appointment != "y" && appointment != "n");// wrong input validation
        //if yes then
        if (appointment == "y") {
            this.allDoctors(Clinic);//print all the list of doctors 

            do {
                var index = this.SearchDoctor(Clinic);
            } while (index == undefined)//if doctor not found if index is undefined then do while loop
           
            console.log(index, " index");

            var Appointed_To = Clinic.Doctors[index].Name;// doctor name store into variable 
            console.log("Appointed_To "+Appointed_To);

            //check how many patient appointed to doctor 

            if (!this.currentAppointments(index, Clinic)) {

                /**
                 * push each value into the json array
                 */
                Clinic.Patients.push(
                    {
                        "Name": Name,
                        "ID": ID,
                        "mobNo": mobNo,
                        "Age": Age,
                        "Appointed_To": Appointed_To,
                        Appointment: (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    })

                console.log("Appointment Fixed ...please Save File");
                console.log("\n" + Name + "'s Appointment is Fixed at Date " + (date.getDate() + 1) + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + Clinic.Doctors[index].Name);
            }
            else {
                //push data in json object in Patient Json Array ob object
                Clinic.Patients.push({
                    Name: Name,
                    ID: ID,
                    mobNo: mobNo,
                    Appointed_To: Appointed_To,
                    Appointment: date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                })
                console.log("\n" + Name + "'s Appointment is Fixed at Day " + date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
                    + " with Dr. " + Clinic.Doctors[index].Name);
            }


        } else {

            console.log(" Appointment Cancelled");

        }

    },
    /**
    * @description this method is for current appountment of doctoir is less than 5 or not check
    * @param index of doctor and json object
    * @returns true/flase
    */
    currentAppointments(index, Clinic) {
        try {
            var appointments = Clinic.Doctors[index].NoOfPatients;


            if (appointments >= 5)
                return false
            else
                // return appointments++;
                return true;
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },
    /**
    * @description this method is to search doctor By Entering name of Doctor
    * @param string Doctor name
    * @returns true /flase
    */

    searchDoctorByname(Clinic, name) {

        var flag = 0;
        for (var key in Clinic.Doctors) {
            if (Clinic.Doctors[key].Name == name) {
                console.log("****Doctor Info****");
                console.log(Clinic.Doctors[key]);
                flag++;
                return true;
            }
        }
        if (flag == 0) {
            console.log(" doctor is not in list please Enter only available  Doctors name");

            return false;

        }


    },
    /**
    * @description this method is for search doctor by thir Id number
    * @param int ID number
    * @returns true false
    */
    searchDoctByID(Clinic, i) {
        //var i = read.question('ID: ');
        flag = 0;
        /**
         * find key in the doctor object we want to search
         */
        for (var key in Clinic.Doctors) {
            if (clinique.Doctors[key].ID == i) {
                console.log("****Doctor's Info****");
                console.log(Clinic.Doctors[key]);
                return true;
            }
        }
        return false;
    },
    /**
    * @description this method is for search doctor by name ,by id,by availablity,by specialization
    * @param parameters id,name,time,specilization
    * @returns return true false index,
    */

    SearchDoctor(Clinic) {


        var flag = 0;
        do {
            console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability\n5.Display All doctors");
            var option3 = read.questionInt('choose correct option : ');
        } while (option3 > 5 || option3 < 1)

        if (option3 == 1) {
            var flag = 0;
            
                var name = read.question('Enter Doctor Name: ');
           
            for (var key in Clinic.Doctors) {
                if (Clinic.Doctors[key].Name === name) {
                    console.log("****Doctor Info****");
                    console.log(Clinic.Doctors[key]);
                    this.singleDoctor(Clinic, key);
                    flag++;
                    return key;
                }
            }

            if (flag == 0) {
                console.log(" doctor is not in list please Enter only available  Doctors name");
            }

        }
        else if (option3 == 2) 
        {
            var i = read.question('Enter Doctor ID: ');

            for (var key in Clinic.Doctors) {
                if (Clinic.Doctors[key].ID == i) {
                    console.log("****Doctor's Info****");
                    console.log(Clinic.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log(" Doctor is not avalable of that ID");

            }

        }
        else if (option3 == 3) {
        
                var i = read.question('Enter Specialization: ');
            
            /**
             * find key in the doctor object we want to search
             */
            for (var key in Clinic.Doctors) {
                if (Clinic.Doctors[key].Specialization == i) {
                    console.log("****Doctor's Info****");
                    console.log(Clinic.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log("  Doctor not  avialble that specialization ");

            }

        }
        
        else if (option3 == 4) {

            do {
                var i = read.question('Availability: ');
                console.log(" i value ", i);
            } while (i != "AM" && i != 'PM' && i != 'Both')

            /**
             * find key in the doctor object we want to search
             */
            for (var key in Clinic.Doctors) {
                if (i.localeCompare(Clinic.Doctors[key].Availability) == 0) {
                    console.log("****Doctor's Info****");
                    console.log(Clinic.Doctors[key]);
                    flag++;
                    return key;
                }
            } if (flag == 0) {
                console.log(" doctor is not available at that time");

            }

        } else if (option3 == 5) {

            this.allDoctors(Clinic);
        }
    },

    /**
    * @description this method is for search patient by name
    * @param name 
    * @returns  true / false 
    */
    searchPatientByName(Clinic, i) {


        for (var key in Clinic.Patients) {
            if (Clinic.Patients[key].Name == i) {
                //show info of particular patient using name
                console.log("****Patients Info****");
                // console.log(Clinic.Patients[key]);
                this.singlePatientDetails(Clinic, key)

                return true
            }
        }
        return false;
    },
    /**
    * @description this method is for search patient by mobilke number
    * @param integer mobile numbwer
    * @returns true false index,
    */
    searchPatientById(Clinic, i) {

        for (var key in Clinic.Patients) {
            if (Clinic.Patients[key].mobNo == i) {
                /**
                 * show info of patient through mobile number
                 */
                console.log("****Patients Info****");
                // console.log(Clinic.Patients[key]);
                this.singlePatientDetails(Clinic, key)

                return true;
            }
        }
        return false;
    },


    /**
    * @description this method is for saerching patient in list by age,id,name,
    * @param id,name,age
    * @returns true /false
    */
    SearchPatient(Clinic) {

        do {
            console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");


            var option4 = read.questionInt('Enter option: ');

        } while (option4 > 4 || option4 < 1)

        var flag = 0;
        if (option4 == 1) {
            
                var i = read.question('Enter Name Patient : ');
            

            for (var key in Clinic.Patients) {
                if (Clinic.Patients[key].Name == i) {
                    //show info of particular patient using name
                    console.log("****Patients Info****");
                    // console.log(Clinic.Patients[key]);
                    this.singlePatientDetails(Clinic, key)

                    flag++;
                }
            } if (flag == 0) {

                console.log(" patient is not availbale in list ");

            }
        }
        else if (option4 == 2) {

            
                var i = read.questionInt('Enter ID: ');
            



            for (var key in Clinic.Patients) {
                if (Clinic.Patients[key].ID == i) {
                    /**
                     * show info of particular patient using ID
                     */
                    console.log("****Patients Info****");
                    // console.log(Clinic.Patients[key]);
                    this.singlePatientDetails(Clinic, key)
                    flag++
                }
            } if (flag == 0) {
                console.log(i, " id is not assigned to patient try agian another way ");

            }
        }
        else if (option4 == 3) {
            
                var i = read.question('mobNo: ');
            

            for (var key in Clinic.Patients) {
                if (Clinic.Patients[key].mobNo == i) {
                    /**
                     * show info of patient using mobile number
                     */
                    console.log("****Patients Info****");
                    // console.log(Clinic.Patients[key]);
                    this.singlePatientDetails(Clinic, key)
                    flag++;
                }
            } if (flag == 0) {
                console.log(i, " no patient available for this mobile number ");

            }
        }
        else if (option4 == 4) {

            
                var i = read.question('Age: ');
            

            for (var key in Clinic.Patients) {
                if (Clinic.Patients[key].Age == i) {
                    console.log("****Patients Info****");
                    //console.log(Clinic.Patients[key]);
                    this.singlePatientDetails(Clinic, key)
                    flag++;
                }
            } if (flag == 0) {
                console.log(i, " age patients are not available ");

            }
        }
    },
    
    
    /**
    * @description this method is for save the json filr after operation file
    * @param file json object
    * @returns file
    */
    saveFile(object) {

        fs.writeFileSync("/home/admin1/Desktop/Neha_Programs/OOPs/JSONFile/Clinic.json", JSON.stringify(object));
        console.log("file saved successfully :) ");
    },

    /**
    * @description this method is for print all doctors in tabular form
    * @param int value 
    * @returns in value
    */
    allDoctors(Clinic) {
        console.log("\n\t\t\t\t\t*** All Doctor Details ***\n");
        console.log("\t-------------------------------------------------------------------------------------------");
        console.log("\t| Doctor Name \t| Doctor ID \t|  Specialization \t| Availability \t| Current Patient |");
        console.log("\t-------------------------------------------------------------------------------------------");
        try {
            for (let i = 0; i < Clinic.Doctors.length; i++) {
                console.log("\t " + Clinic.Doctors[i].Name + ""
                    + "\t " + Clinic.Doctors[i].ID + "\t"
                    + "\t " + Clinic.Doctors[i].Specialization + "\t"
                    + "\t " + Clinic.Doctors[i].Availability + "\t"
                    + "\t " + Clinic.Doctors[i].NoOfPatients + "\t\t  ");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t-------------------------------------------------------------------------------------------");
    },
    /**
    * @description this method is for print All Patients in tabular form
    * @param json object
    * @returns nothing
    */

    allPatients(Clinic) {
        console.log("\n\t\t\t\t*** All Patient Details ***\n");
        console.log("\t-------------------------------------------------------------------------");
        console.log("\t| Patient Name \t| Patient ID \t|  Contact Number \t| Appointment\t|");
        console.log("\t-------------------------------------------------------------------------");
        try {
            for (let i = 0; i < Clinic.Patients.length; i++) {
                console.log("\t| " + Clinic.Patients[i].Name + ""
                    + "\t| " + Clinic.Patients[i].ID + "\t"
                    + "\t| " + Clinic.Patients[i].mobNo + "     "
                    + "\t| " + Clinic.Patients[i].Appointed_To + "\t|");
            }
        } catch (error) {
            console.log("* ERROR: " + error);
        }
        console.log("\t-------------------------------------------------------------------------");
    },


    /**
    * @description this method is for print single Patuent when search operation form
    * @param jsonn object
    * @returns Patient object pruinted
    */
    singlePatientDetails(Clinic, index) {
        try {
            console.log("\t\t~ Name : " + Clinic.Patients[index].Name);
            console.log("\t\t~ ID : " + Clinic.Patients[index].ID);
            console.log("\t\t~ Contact Number : " + Clinic.Patients[index].mobNo);
            console.log("\t\t~ Appointed_To : " + Clinic.Patients[index].Appointed_To);
            console.log("\t\t~ Appontment :- " + Clinic.Patients[index].Appointment);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    },
    /**
    * @description this method is to print single doctor info when search operation performed
    * @param json object
    * @returns return json
    */
    singleDoctor(Clinic, index) {
        try {
            console.log("\t\t~ Name : " + Clinic.Doctors[index].Name);
            console.log("\t\t~ ID : " + Clinic.Doctors[index].ID);
            console.log("\t\t~ Specialization : " + Clinic.Doctors[index].Specialization);
            console.log("\t\t~ Availability :- " + Clinic.Doctors[index].Availability);
            console.log("\t\t~ Current Patients :- " + Clinic.Doctors[index].NoOfPatients);
        } catch (error) {
            console.log("* ERROR: " + error);
        }
    }
    
}
