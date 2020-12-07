import React from "react";
import { Button, TextField, Modal } from "@material-ui/core";
import { Form, Formik } from "formik";

interface Values {
    fullName: string;
    email: string;
    phone: string;
    licensePlate: string;
}

interface Props {
    saveToDatabase: (values: Values) => void;
}


const RegistrationForm: React.FC<Props> = ({saveToDatabase}) => {
    
    return (
        <div>
            <Formik 
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
            {({values, handleChange, handleBlur}) => (
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
            </Formik>
        </div>
    )
}

export default RegistrationForm;