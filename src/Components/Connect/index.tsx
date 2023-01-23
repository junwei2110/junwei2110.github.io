import React, { useState } from 'react';
import { AiFillLinkedin, AiOutlineMail, AiOutlineReddit, AiOutlineTwitter } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { send } from '@emailjs/browser';

import "./styles.css";
import { linkedinUrl, redditUrl, twitterUrl } from '../../userInput';

export default function Connect() {

    const [emailModal, setEmailModal] = useState(false);

    const handleModal = (open: boolean) => {
        if (open) {
            setEmailModal(true);
            document.body.style.overflow = "hidden";
        } else {
            setEmailModal(false);
            document.body.style.overflow = "auto";
        }
    }

    return (
        <div className={"connect-container"}>
            <div className={"connect-background"}>
                <div className={"connect-background-icon-container"}>
                    <a href={linkedinUrl}>
                        <AiFillLinkedin size={100} color={"black"} style={{marginRight: "2vw"}} />
                    </a>
                    <a href={redditUrl}>
                        <AiOutlineReddit size={100} color={"black"} style={{marginRight: "2vw"}} />
                    </a>
                    <a href={twitterUrl}>
                        <AiOutlineTwitter size={100} color={"black"} style={{marginRight: "2vw"}} />
                    </a>
                    <AiOutlineMail className={"email-icon"} size={100} color={"black"} onClick={() => handleModal(true)} />
                    
                </div>
            </div>
            <div className={"connect-footer"}></div>
            {emailModal ? <EmailModal handleModal={handleModal} /> : null}
        </div>
    )
}

const EmailModal = ({ handleModal } : {
    handleModal: (val: boolean) => void;
}) => {

    const [emailParams, setEmailParams] = useState({
        to_name: "Jun Wei",
        from_name: "",
        message: "",
        email_subject: "",
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await send("service_u8wp726", "template_5eiv38f", emailParams, "rKIO5699VCeZXyfpe");
            handleModal(false);
            setEmailParams({
                to_name: "Jun Wei",
                from_name: "",
                message: "",
                email_subject: "",
            });
            alert(`Email sent successfully`);
        } catch (error: any) {
            handleModal(false);
            setEmailParams({
                to_name: "Jun Wei",
                from_name: "",
                message: "",
                email_subject: "",
            });
            alert(`${error} occurred. Please try again later`);

        }
        

    };

    const handleChange = (e: any) => {
        setEmailParams((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <div className={"email-modal-overlay"} />

            <form 
            className={"email-modal-form"} 
            onSubmit={handleSubmit}
            action="mailto:ngjunwei2110@gmail.com" method="post" encType="text/plain"
            >
                <ImCross className={"cross-btn"} size={20} color={"white"} onClick={() => handleModal(false)} />
                <h1 className={"email-modal-header"} style={{ color: "white" }}>Send me an email!</h1>
                <input className={"email-modal-input"} id={"sender-email"} name={"from_name"} onChange={handleChange} value={emailParams.from_name} placeholder={"Enter your email address here so I know who to reply!"} type={"email"} required />
                <input className={"email-modal-input"} id={"email-subject"} name={"email_subject"} onChange={handleChange} value={emailParams.email_subject} placeholder={"Enter your email subject here"} />
                <textarea className={"email-modal-input"} id={"email-body"} name={"message"} onChange={handleChange} value={emailParams.message} placeholder={"Enter your email here"} />
                <button type={"submit"} className={"submit-btn"}>Submit</button>
            </form>
        </>
    )
}