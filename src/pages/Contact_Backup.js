import React, { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    function submitHandler(event) {
        event.preventDefault();
        console.log(formState);
        window.location.href = "mailto:mbartnett@gmail.com?subject=" + formState.name + "&body=" + formState.message;
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
                        <input value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} type="text" id="name" name="name" required></input>
                        <div className="error-message" id="name-error">&bull; name is required</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL:</label>
                        <input value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} type="email" id="email" name="email" required></input>
                        <div className="error-message" id="email-error">&bull; please enter a valid email address</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MESSAGE:</label>
                        <textarea value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} id="message" name="message" required></textarea>
                        <div className="error-message" id="message-error">&bull; message is required</div>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}