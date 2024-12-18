import React, {useState} from 'react'
import Post from "../../../images/icons/post.svg";
import Modal from '../global/Modal.jsx'

const emailRegex = new RegExp(`^[a-öA-Ö0-9_.-]{2,}@[a-zA-Z]{2,}\\.[a-zA-Z]{2,}$`);

const SubscriberButton = (props) => {
    const [email, setEmail] = useState('');
    const [chosenEmail, setChosenEmail] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid) {
            console.log("regex failed?")
            return;
        }
        try {
            const response = await fetch(
                `https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${email}`,
                {
                    method: 'POST',
                });

            if (!response.ok) {
                console.log("fel")
            }
            if (response.ok) {
                setChosenEmail(email);
                setShowModal(true);

                setEmail('')
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
        const isValidInput = new RegExp(emailRegex).test(e.target.value);
        setIsValid(isValidInput);
        if (!isValidInput) {
            setErrorMessage("Please enter a valid email");
        } else {
            setErrorMessage("")
        }
    };

    return (
        <div>
            <div className="sub-right">
                <form className="subscriber-form" onSubmit={handleSubmit}>
                    <div className="subscriber-form-input"><input
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        autoComplete="off"
                        onChange={handleChange}/>
                        <img src={Post} className="icon" alt=""/>
                    </div>
                    <button className="footer-button" type="submit"><span>{props.value}</span></button>
                </form>
                {errorMessage && <span className="error-message-span">{errorMessage}</span>}
            </div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <p className="modal-success">You have been successfully subscribed to our newsletter!</p>
                    <p className="modal-body">You will receive our newsletter at {chosenEmail}</p>
                    <button className="primary-button" onClick={closeModal}><span>Close</span></button>
                </Modal>
            )}
        </div>
    )
}
export default SubscriberButton
