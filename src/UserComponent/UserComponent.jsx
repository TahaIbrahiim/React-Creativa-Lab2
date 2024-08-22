import React, { Component } from "react";
import LoginComponent from "../Components/LoginComponent";
import SignupComponent from "../Components/SignupComponent";

class UserComponent extends Component {
  constructor() {
        super();
        this.state = {
            toggle: 0
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        if(this.state.toggle === 0) {
            this.setState({
                toggle: 1
            })
        } else this.setState({
            toggle: 0
        })
    }



    render() {
        return (
            <div>
                {this.state.toggle ? <LoginComponent /> : <SignupComponent/>}
                <button style = { styles.button } onClick={this.toggle}>toggle</button>
            </div>
            
            )
        }
}



const styles = {
    button: {
        marginTop: '25px',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#ffffff',
        fontSize: '16px',
        cursor: 'pointer',
},
};

export default UserComponent;