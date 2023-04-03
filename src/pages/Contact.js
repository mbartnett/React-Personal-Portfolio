import React, { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    function submitHandler(event) {
        event.preventDefault();
        console.log(formState);

        // check for empty fields and set errors state
        const errorObj = {};
        Object.keys(formState).forEach(key => {
            if (!formState[key]) {
                errorObj[key] = true;
            } else {
                errorObj[key] = false;
            }
        });
        setErrors(errorObj);

        // if no errors, send email
        if (!Object.values(errorObj).includes(true)) {
            window.location.href = "mailto:mbartnett@gmail.com?subject=" + formState.name + "&body=" + formState.message;
        }
    }

    return (
        <section className="contact">
            <div className="holler-container">
                <h2>HOLLER</h2>
            </div>
            <div className="form-container">
                <form id="contact-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">NAME:</label>
                        <input
                            value={formState.name}
                            onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                            type="text"
                            id="name"
                            name="name"
                            required
                            onFocus={() => setErrors({ ...errors, name: false })}
                        ></input>
                        {errors.name && <div className="error-message">&bull; name is required</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL:</label>
                        <input
                            value={formState.email}
                            onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            required
                            onFocus={() => setErrors({ ...errors, email: false })}
                        ></input>
                        {errors.email && <div className="error-message">&bull; please enter a valid email address</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MESSAGE:</label>
                        <textarea
                            value={formState.message}
                            onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                            id="message"
                            name="message"
                            required
                            onFocus={() => setErrors({ ...errors, message: false })}
                        ></textarea>
                        {errors.message && <div className="error-message">&bull; message is required</div>}
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}
