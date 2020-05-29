import { validateDate } from "./date-validation";


describe("Date Validation", () => {
    const formats: Array<{
        name: string,
        examples: string[],
    }> = [
        {
            name: "incomplete YYYY.MM.DD",
            examples: ['2', '20', '202', '2020', '2020.', '2020.1', '2020.10', ]
        },
        {
            name: "incomplete",
            examples: ['2020.0','2020.04.3', '2020.04.0']
        },
        {
            name: "DD.MM.YYYY",
            examples: ["22.01.2017", "30.12.2000"]
        },
        {
            name: "incomplete DD.MM.YYYY",
            examples: ["31.0", "0", '25.3']
        },
    ];


    const formatsWrong: Array<{
        name: string,
        examples: string[],
    }> = [
        {
            name: "YYYY.MM.DD",
            examples: ["2021.02.29", "1990.04.31"]
        },
        {
            name: "incomplete YYYY.MM.DD",
            examples: ['2021.02.30']
        },
        {
            name: "incomplete DD.MM.YYYY",
            examples: ["25.30", "31.04"]
        },
        {
            name: "wrong year",
            examples: ["203", "32", "2021", "25-02-1", "25-02-3", "25-02-203"]
        },
    ];


    for (let i = 0; i<formats.length; i++){
        for (let j = 0; j<formats[i].examples.length; j++){
            it(`format = ${formats[i].name}, value =${formats[i].examples[j]}`, () => {
                const res = validateDate(formats[i].examples[j]);
                expect(res).toEqual(true);
            })
        }
    }
    for (let i = 0; i<formatsWrong.length; i++){
        for (let j = 0; j<formatsWrong[i].examples.length; j++){
            it(`WRONG VALUE -- format = ${formatsWrong[i].name}, value =${formatsWrong[i].examples[j]}`, () => {
                const res = validateDate(formatsWrong[i].examples[j]);
                expect(res).toEqual(false);
            })
        }
    }

    const getDaysArray = function(start:Date, end:Date) {
        for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
            const split = new Date(dt).toLocaleDateString().split('\/')
            const string = (`${split[1]}.${split[0]}.${split[2]}`);
            arr.push(string.substr(0,string.length-1));
        }
        return arr;
    };
    const allDates = getDaysArray(new Date("2000-01-01"), new Date("2020-01-01"));
    for (let date of allDates){
        it(`all dates, date -- ${date}`, ()=>{
            expect(validateDate(date)).toEqual(true);
        })
    }
});
