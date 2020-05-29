import React, {ChangeEventHandler} from "react";
import { Page } from "./page";

/**
 *
 * @param value
 */
export function validateDate(value: string): boolean {
    const curDate = value.replace(/[\/\.\,\s]/g, '-')
    const curLength = curDate.length;

    function isValid(generatedDate:string) {
        const date = new Date(generatedDate);
        const month = generatedDate.split('-')[1];
        const year = date.getFullYear();
        const monthFromObj = date.getMonth()+1;
        const curYear = (new Date().getFullYear())+1;
        if ((+month===monthFromObj) && (1999<year)&&(year<curYear) && (!isNaN(date.getTime()))) return true;
        else if ((generatedDate==="29-02-201") || (generatedDate==="29-2-201")) return true;
    }
    function dmy(curDate:string) {
        const validDates = ["01-01-2020", "10-01-2020", "1-1-2020", "10-1-2020"];
        for (let validDate of validDates) {
            let generatedDate = curDate + validDate.substr(curLength);
            const splitDate = generatedDate.split('-');
            generatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
            if (isValid(generatedDate)) return true;
        }
        return false;
    }
    function ymd(curDate:string) {
        const validDates = ["2020-01-10", "2020-01-01", "2020-1-10", "2020-1-1"];
        for (let validDate of validDates) {
            let generatedDate = curDate + validDate.substr(curLength);
            if (isValid(generatedDate)) return true;
        }
        return false;
    }
    return ymd(curDate)||dmy(curDate);
}

const Label: React.FC<{ value: string }> = ({ value }) => {
    const isValid = validateDate(value);
    if (isValid) {
        return <label className="text-success">Valid</label>;
    }
    return <label className="text-danger">Invalid</label>;
}

export const DateValidation: Page = () => {
    const [ value, setValue ] = React.useState("");
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <input type="text" value={value} onChange={handleChange}/>
            <Label value={value} />
        </>
    );
}

DateValidation.path = "/date-validation";
DateValidation.title = "Date validation";
