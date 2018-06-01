import React from 'react';

const CustomForm = ({ status, message, onValidated, displayForm, onSubmitClick }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
      <div className="optin-container">
        <div className="cta" id="cta" onClick={onSubmitClick}>Sign Up to stay up-to-date on local events</div>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
            <div className="form" id="form" style = {displayForm}>

                <input
                    ref={node => (name = node)}
                    type="text"
                    placeholder="John Doe"
                    style={{marginBottom: "8px"}}
                />
                <input
                    ref={node => (email = node)}
                    type="email"
                    placeholder="rtgff@jhgsh.com"
                    style={{marginBottom: "8px"}}
                />
                <br />
                <button
                    className="btnsubmit"
                    onClick={submit}
                >
                    Submit
                </button>
            </div>
            
	    </div>
    );
  };



export default CustomForm;
