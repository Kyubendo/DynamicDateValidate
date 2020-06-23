import * as React from "react";
import {validateDate, validateEmail} from "./pages"
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
        if(validateEmail(value)) this.setState({text: value});
    }

    render() {
        return (
            <input value={this.state.text} onChange={this.handleChange}/>
        );
    }
}
