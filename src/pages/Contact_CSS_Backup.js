.contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.holler-container {
    padding: 60px;
    margin-bottom: 80px;
}

.contact .holler-container h2 {
    font-size: 142px;
    line-height: 122px;
    font-weight: 800;
    font-family: Gotham Ultra;
    letter-spacing: 4px;
    background: linear-gradient(to bottom, #ff00ff, #ccff00);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
}

.contact .form-container {
    padding: 25px;
    margin: 20px;
}

#contact-form {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-group {
    width: 100%;
}

.contact label {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .2px;
    transform: scaleY(.95);
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 15px 10px 5px;
    border-radius: 4px;
    margin-bottom: 20px;
    border: none;
    position: relative;
}

input[type="text"]::before,
input[type="email"]::before,
textarea::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 24px;
    top: 10px;
    left: 10px;
    background-color: black;
    animation: cursor 1s infinite;
}

@keyframes cursor {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.error-message {
    color: #ff00ff;
    font-size: 14px;
    margin-bottom: 20px;
}

button[type="submit"] {
    background-color: black;
    color: white;
    width: 250px;
    height: 60px;
    font-family: 'Gotham Black';
    text-transform: uppercase;
    font-size: 22px;
    border-style: solid;
    border-width: 7.5px;
    border-image: linear-gradient(to right, #40c9ff, #e81cff) 1;
    transition: transform 0.1s ease-in-out;
}

button[type="submit"]:hover {
    border-style: solid;
    border-width: 7.5px;
    border-image: linear-gradient(to right, #e81cff, #40c9ff) 1;
    transform: scale(1.2);
}