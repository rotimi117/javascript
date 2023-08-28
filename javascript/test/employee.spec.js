import{ Employee } from "../intermidary/employee";

describe("Test for Employee Object", () => {
    Test ("should get name via object", () => {
        //given
        let murife = new Employee("murife", "+234876776877", "runner");
        //when
        expect(murife.name).toBe("murife");
        expect(murife.phoneNumber).toBe("+234876776877");
        expect(murife.designation).toBe("runner");
        //assert
        expect(typeof murife.printDetails()).toEqual("string");
    });

    test('should assign salary based on designation', () => {
        let oyin = new Employee("Oyin", "234876776877", "cook");
        let response = oyin.paySalary();
        
        
        expect(response.isSuccesful).toBe(true)
        expect(oyin.paySalary().isSuccesful).toBe(true)
        expect(oyin.paySalary().isSuccesful).toBe(true)
    });
});