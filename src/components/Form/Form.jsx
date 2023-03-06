import { useContext, useState, useRef } from 'react';
import { ThemeContext } from '../../theme/Theme';
import emailjs from '@emailjs/browser';

// components
import { Label, Checkbox, Button } from 'flowbite-react';
import Subtitle from '../Subtitle/Subtitle';

// modal
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Form = ({ button, email, terms, terms2, textarea, title, terms_and_conditions, phone, name, confirm_message }) => {

    const form = useRef();
    const user_nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const [messaggioConsegnato, setMessaggioConsegnato] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
            .then((result) => {
                console.log(result);
                setMessaggioConsegnato(true);
                clearInput();
            }, (error) => {
                console.log(error.text);
            });
    };


    const clearInput = () => {
        let inputFields = [user_nameRef, emailRef, phoneRef, messageRef];

        inputFields.forEach(inputField => {
            inputField.current.value = '';
        });

    }

    const { isDark } = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);

    const modalHandler = () => {
        setVisible(!visible);
    }

    return (
        <>
            <form className={`flex flex-col gap-2 form-width`} ref={form} onSubmit={sendEmail}>
                <div>
                    <Subtitle>{title}</Subtitle>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value={name}
                        />
                    </div>
                    <input
                        id="user_name"
                        type="text"
                        className={`${isDark && "dark-mode-form"} rounded-md ring-gold md:w-56 w-64`}
                        name="user_name"
                        placeholder={name}
                        required={true}
                        ref={user_nameRef}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="phone"
                            value={phone}
                        />
                    </div>
                    <input
                        id="user_phone"
                        type="text"
                        className={`${isDark && "dark-mode-form"} rounded-md ring-gold md:w-56 w-64`}
                        name="user_phone"
                        placeholder={phone}
                        required={true}
                        ref={phoneRef}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value={email}
                        />
                    </div>
                    <input
                        id="email2"
                        type="email"
                        className={`${isDark && "dark-mode-form"} rounded-md ring-gold md:w-56 w-64`}
                        name="user_email"
                        placeholder={email}
                        required={true}
                        ref={emailRef}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="message"
                            value={textarea}
                        />
                    </div>
                    <textarea
                        className={`rounded-md ring-gold md:w-56 w-64 text-sm ${isDark && "dark-mode-textarea"}`}
                        id="comment"
                        name="message"
                        placeholder={textarea}
                        required={true}
                        rows={4}
                        ref={messageRef}
                    />
                </div>
                <div className="md:flex md:items-center gap-2 mt-2">
                    <Checkbox id="agree" defaultChecked={true} required />
                    <Label htmlFor="agree"
                        className={`text-xs pl-2`}>
                        {terms}{' '}
                        <span onClick={() => modalHandler()} className={`text-blue-600 hover:underline underline-offset-2`}>
                            {terms2}
                        </span>
                        .
                    </Label>
                </div>
                {
                    messaggioConsegnato ?
                        <p className='text-green-600 text-sm mt-3'>{confirm_message}</p>
                        :
                        <Button type="submit" className='bg-gold border-0 ring-0 w-56 mt-3 text-black font-semibold tracking-widest' aria-label="Invia la richiesta">
                            {button}
                        </Button>
                }
            </form>
            {
                visible === true ?
                    <Rodal visible={visible} onClose={() => modalHandler()}>
                        <div className={`p-5 opacity-90`}>
                            <div>
                                <h3 className={`text-xl`}>{terms2}</h3>
                            </div>
                            <div className='mt-3'>
                                <p className={`text-md}`}>
                                    <i>{terms_and_conditions}</i>
                                </p>
                            </div>
                        </div>
                    </Rodal>
                    : null
            }
        </>
    )
}

export default Form;