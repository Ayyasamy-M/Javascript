class student{
    constructor(name,age,roll,mob){
    this.per_name=name;
    this.per_age=age;
    this.per_roll=roll;
    this.per_mob=mob;
    }
}


class scl extends student{

    constructor(scl_name,per_name,per_age,per_roll,per_mob){

        super(per_name,per_age,per_roll,per_mob)

        this.school_name=scl_name;
    }
    print(){

        return "age is"+this.per_age+""+"Studies in"+this.school_name;
    }
}

scl_1=new scl("ooty","selvi","22","16728","12345678");
// scl_1=new scl("kovai","selva","23","16728","12345678");

console.log(scl_1.print());


localStorage.setItem("name","ayya")

console.log(localStorage.getItem("name"));