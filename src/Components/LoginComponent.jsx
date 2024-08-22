import React from "react";

const LoginComponent = () => {

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Login</h1>
                <form style={styles.form}>
                    <input type="text" style={styles.input} placeholder="Username" />
                    <input type="password" style={styles.input} placeholder="Password" />
                </form>
        </div>
    )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '280px', // Reduce the width
    padding: '15px', // Reduce padding
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '8px', // Reduce padding
    marginBottom: '10px', // Reduce margin between inputs
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
};

export default LoginComponent;