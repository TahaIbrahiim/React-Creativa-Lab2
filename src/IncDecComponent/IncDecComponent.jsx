import React, { Component } from "react";

class IncDecComponent extends Component{
    constructor(){
        super();
        this.state = {
            number: 1
        }

        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment() {
        this.setState({
            number: this.state.number+1
        })
    }

    Decrement() {
        if (this.state.number > 1) {
                this.setState({
                    number: this.state.number-1
                })
        }
    }


    render() {
        return(
        <div style={styles.container}>
            <h1 style={styles.title}>Number</h1>

            <button style={styles.button} onClick={this.Decrement}>
                -
            </button>
            <span style={styles.number}>{this.state.number}</span>
            <button style={styles.button} onClick={this.Increment}>
                +
            </button>

        </div>
    )}
}



const styles = {
    Container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        backgroundColor: "#f8f9fa",
    },
    button: {
        fontSize: "20px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#ffcc00",
        color: "#fff",
        cursor: "pointer",
    },
    number: {
        fontSize: "20px",
        margin: "0 10px",
    },
    title: {
        marginBottom: "20px",   
    },
};
    

export default IncDecComponent;