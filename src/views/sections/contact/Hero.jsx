import React, {useState, useEffect} from 'react'
import AddGroup from '../../../images/contact/add-group.svg'
import Envelope from '../../../images/contact/bx-envelope.svg'
import RightArrow from '../../../images/icons/right-arrow.svg'
import FormInput from "./FormInput.jsx";
import Modal from "../global/Modal.jsx";

const defaultData = {
    fullName: "",
    email: "",
    specialist: "",
    date: "",
    time: "",
    profileImageUrl: "",
};

const apiEndPoint = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists';
const fullNameRegex = new RegExp(`^(?!.*[.'-, ]{2})[a-zA-ZåäöÅÄÖ]{2,} [a-zA-ZåäöÅÄÖ. ',-]{1,}[a-zA-ZåäöÅÄÖ]$`);
const emailRegex = new RegExp(`^[a-öA-Ö0-9_.-]{2,}@[a-zA-Z]{2,}\\.[a-zA-Z]{2,}$`);

const Hero = () => {
    const [specialists, setSpecialists] = useState([]);
    const [selectedSpecialist, setSelectedSpecialist] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [specialistError, setSpecialistError] = useState(false);

    const [chosenData, setChosenData] = useState("")
    const [chosenImage, setChosenImage] = useState("")

    const [dateError, setDateError] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };
    const [values, setValues] = useState(defaultData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndPoint);
                const data = await response.json();
                setSpecialists(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const handleChange = (e) => {
        setSpecialistError(false);
        const {name, value} = e.target;
        setValues((prevData) => ({...prevData, [name]: value}));
    };

    const handleSpecialistChange = (e) => {
        try {
            const selectedSpecialistId = e.target.value;
            setValues(prevValues => ({
                ...prevValues,
                specialist: selectedSpecialistId
            }));
            setSelectedSpecialist(selectedSpecialistId);

            const data = specialists.find(specialists => specialists.id === selectedSpecialistId)
            setChosenData(`${data.firstName} ${data.lastName}`)
            setChosenImage(data.profileImageUrl)
        } catch {

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidName = fullNameRegex.test(values.fullName);
        const isValidEmail = emailRegex.test(values.email);
        const currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();


        let futureDate = new Date(currentYear, currentMonth, currentDay + 1)
        let pickedDate = values.date.split('-');
        pickedDate = new Date(pickedDate[0], pickedDate[1]-1, pickedDate[2]);

        if (isValidEmail && isValidName && pickedDate.getTime() >= futureDate.getTime()) {
            if (!values.specialist) {
                setSpecialistError(true);
                return;
            }

            try {
                const response = await fetch(
                    'https://kyhnet23-assignment.azurewebsites.net/api/book-appointment',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fullName: values.fullName,
                            email: values.email,
                            specialist: values.specialist,
                            date: values.date,
                            time: values.time,
                        })

                    });

                if (response.ok) {
                    setSelectedSpecialist('')
                    setValues(defaultData)
                    setShowModal(true);
                    setSpecialistError(false);
                    setDateError(false);

                } else {
                    console.log("error: ", values)
                }
            } catch (error) {
                console.error("error: ", error);
            }
        } else{
            setDateError(true);
        }
    }

    return (
        <div className="container">
            <div className="hero">
                <div className="contact-info">
                    <h1 id="contact-info-header">Contact Us</h1>

                    <div className="contact-section">
                        <div className="contact-form-icon"><img src={Envelope} alt="contact icon"/></div>
                        <div className="contact-section-body">
                            <h4>Email us</h4>
                            <div>
                                <p className="text-m">Please feel free to drop us a line. We will respond as soon as
                                    possible</p>
                                <a href="#">Leave a message <img src={RightArrow} alt="right arrow"/></a>
                            </div>
                        </div>

                        <div className="contact-form-icon"><img src={AddGroup} alt="contact us"/></div>
                        <div className="contact-section-body">
                            <h4>Careers</h4>
                            <div>
                                <p className="text-m">Sit ac ipsum leo lorem magna nunc mattis maecenas non
                                    vestibulum.</p>
                                <a href="#">Send an application <img src={RightArrow} alt="right arrow"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Get Online Consultation</h2>

                    <FormInput id="fullName"
                               type="text"
                               label="Full name"
                               name="fullName"
                               value={values.fullName}
                               onChange={handleChange}
                               required="required"
                               errorMessage="Please enter your first and last name."
                               regexPattern={fullNameRegex}/>

                    <FormInput id="email"
                               type="text"
                               label="Email"
                               name="email"
                               value={values.email}
                               onChange={handleChange}
                               required="required"
                               errorMessage="Please enter a valid email."
                               regexPattern={emailRegex}/>


                    <div id="contact-form-dropdown">
                        <p className="form-text-label">Specialist</p>
                        <select className="contact-specialist-field" value={selectedSpecialist}
                                onChange={handleSpecialistChange}>
                            <option value=""></option>
                            {specialists.map((specialist) => (
                                <option key={specialist.id} value={specialist.id}>
                                    {specialist.firstName} {specialist.lastName}
                                </option>
                            ))}
                        </select>
                        {specialistError && <span className="contact-form-span">Please choose a specialist</span>}
                    </div>
                    <div id="contact-form-date-time">
                        <FormInput id="date"
                                   type="date"
                                   label="Date"
                                   name="date"
                                   value={values.date}
                                   onChange={handleChange}
                                   required="required"
                                   errorMessage="Please enter a valid date"/>

                        <FormInput id="time"
                                   type="time"
                                   label="Time"
                                   name="time"
                                   value={values.time}
                                   onChange={handleChange}
                                   required="required"
                                   errorMessage="Please enter a valid time"/>
                    </div>

                    {dateError && <span className="contact-form-span">Please enter a valid date at least 1 day ahead.</span>}
                    <button id="contact-form-button" className="primary-button"><span>Make an appointment</span>
                    </button>
                </form>

                {showModal && (
                    <Modal onClose={closeModal}>
                        <p className="modal-success">Your appointment has been booked.</p>
                        <p className="modal-body">Your chosen specialist
                            <div className="divider"></div>
                            <div className="modal-specialist">
                                <div className="modal-specialist-author">
                                    <img src={chosenImage} alt="author profile picture"/>
                                    <p>{chosenData}</p>
                                </div>
                            </div>
                        </p>
                        <button className="primary-button" onClick={closeModal}><span>Close</span></button>
                    </Modal>
                )}
            </div>
        </div>
    )
}
export default Hero
