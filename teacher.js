class Student {
    question(Teacher){
    Teacher.giveAnswer();
    }
     learn(){
     console.log("student learn");
 }   
}
class Teacher {
    teach(Student){
        Student.learn();
    }
    giveAnswer(){
        console.log("teacher answering a question");
    }
}
const Pavel= new Student();
const Holik= new Teacher();

//Pavel.learn();
//Holik.giveAnswer();
Pavel.question(Holik);
Holik.teach(Pavel);