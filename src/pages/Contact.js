import React, { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    function submitHandler(event) {
        event.preventDefault();
        console.log(formState);
        window.location.href = "mailto:mbartnett@gmail.com?subject=" + formState.name + "&body=" + formState.message;
    }
    return (
        <section class="contact">
            {/* <section class="circle"> */}
            <h2>HOLLER</h2>
            <form id="contact-form" onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="name">NAME:</label>
                    <input value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} type="text" id="name" name="name" required></input>
                    <div class="error-message" id="name-error">Name is required</div>
                </div>
                <div class="form-group">
                    <label for="email">EMAIL:</label>
                    <input value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} type="email" id="email" name="email" required></input>
                    <div class="error-message" id="email-error">Please enter a valid email address</div>
                </div>
                <div class="form-group">
                    <label for="message">MESSAGE:</label>
                    <textarea value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} id="message" name="message" required></textarea>
                    <div class="error-message" id="message-error">Message is required</div>
                </div>
                <button type="submit">Send Message</button>
            </form>
            {/* </section> */}
            {/* <div id="form-status"></div> */}
        </section>
    );
}