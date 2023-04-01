import React from 'react';

export default function Contact() {
    return (
        <section class="contact">
            <h2>HOLLER</h2>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <div class="error-message" id="name-error">Name is required</div>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <div class="error-message" id="email-error">Please enter a valid email address</div>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <div class="error-message" id="message-error">Message is required</div>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div id="form-status"></div>
        </section>
    );
}