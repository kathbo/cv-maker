import React from 'react';
import data from './sample-data';

class Input extends React.Component {
    constructor() {
        super();
        this.insertTxt = this.insertTxt.bind(this)
    }
    componentDidMount() {
        console.log(this.props.placeholder);
    }
    insertTxt(el) {
        let id = 'cv' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    render() {
        let placeholder = this.props.placeholder;
        return (
            <input type="text" id={'form-' + placeholder} 
                placeholder={placeholder} onInput={(el) => this.insertTxt(el)}
                value={data['personalData']['cv' + placeholder]}
            />
        )
    }
};

export default Input;