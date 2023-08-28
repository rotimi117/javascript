function Employee(name, phoneNumber, designation){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.designation = designation;

    this.printDetails = () => {
        return 'my name is ${this.name} \n you can contact me via ${this.phoneNumber}, I am the ${designation} of sulty bank';
    };
    this.company = "sulty bank";

    this.paySalary = (designation) => {
        let disbursementResponse = {
            isSuccessful: true,
            salary: this.salary,
            designation: this.designation,
        };

        
        if(designation === "manager"){
            this.salary = 6000000;
            disbursementResponse["paidAmount"] = this.salary;
            disbursementResponse["designation"] = this.designation;
        }else if (designation === "cook"){
            this.salary = 2000;
        }
        return{
            isSuccessful: "true",
            paidAmount: this.salary,
            designation: this.designation,
        };
    }
}

let employee1 = new Employee("joe botsman", "+234435464575", "manager");
let employee2 = new Employee("esther botsman", "+2345576678686", "cook" );
console.log(employee1.__proto__ === employee2.__proto__);
console.log(employee1.company === employee2.company);
console.log(employee1.printDetails());
console.log(employee2.printDetails());
