import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check for errors before submitting the form
        const errors = {};
        if (!name.trim()) {
            errors.name = "Name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email address";
        }
        if (!message.trim()) {
            errors.message = "Message is required";
        }

        if (Object.keys(errors).length > 0) {
            // Display errors if any
            setErrors(errors);
        } else {
            // Submit the form if there are no errors
            // (you can add your own code for handling form submission here)
            console.log("Form submitted");
        }
    };

    const handleInputChange = (event) => {
        // Clear any errors for the input that was just updated
        const { name, value } = event.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

        // Update the corresponding state variable
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
