import React from "react";
import { Button, TextField, Modal } from "@material-ui/core";
import { Form, Formik } from "formik";
import '../RegistrationForm/styles/styles.scss'

import Calendar from '../RegistrationForm/SVG images/Calendar.svg'




interface Values {
    fullName: string;
    email: string;
    phone: string;
    licensePlate: string;
}

interface Props {
    saveToDatabase: (values: Values) => void;
}


const RegistrationForm: React.FC<Props> = ({ saveToDatabase }) => {

    return (


        <div className='registration-container'>
            <div className='registration-redLine'></div>
            <div className='registration-main'>
                <div className='registration-main__text'>
                    <div className="registration-header">
                        <h1 className="registration-header__text">Registracija paslaugoms</h1>
                    </div>
                    <div className="registration-buttons__container">
                        <button className="registration__button1">Registracija internetu</button>
                        <button className="registration__button2">Registracija telefonu</button>
                    </div>
                </div>
                <div className='registration-main__image'>
                    <img className='calendar' src={Calendar} alt='calendar'></img>
                </div>
            </div>
        </div >
    )
}

export default RegistrationForm;


{/* <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        phone: '',
                        licensePlate: ''
                    }}
                    onSubmit={values => {
                        saveToDatabase(values)
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <div>
                                <TextField
                                    name="fullName"
                                    placeholder="Vardas ir pavardė"
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="email"
                                    placeholder="El. pašto adresas"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="phone"
                                    placeholder="Tel. numeris"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="licensePlate"
                                    placeholder="Automobilio valst. nr."
                                    value={values.licensePlate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <Button type="submit">Registruotis</Button>
                            <pre>
                                {JSON.stringify(values, null, 2)}
                            </pre>
                        </Form>
                    )}
                </Formik> */}