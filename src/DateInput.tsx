import * as React from "react";
import {validateDate} from "./pages/date-validation"
type State = {
    text:string;
}
type Props = {
}


export class DateInput extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        if(validateDate(value)) this.setState({text: value});
    }

    render() {
        return (
            <input value={this.state.text} onChange={this.handleChange}/>
        );
    }
}
