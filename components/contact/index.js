import contact from "../../styles/contact.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { RiSendPlaneFill } from "react-icons/ri"
import Error from "../Error"
import axios from "axios"
const initialValues = {
    name: "",
    email: "",
    subject: "",
    msg: ""
}
const config = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}
const onSubmit = (values, onSubmitProps) => {
    const data = {
        service_id: process.env.YOUR_SERVICE_ID,
        template_id: process.env.YOUR_TEMPLATE_ID,
        user_id: process.env.YOUR_USER_ID,
        template_params: values
    }
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data, config)
        .then(response => {
            alert("Success send message ☺️", response.data)
        }).catch(error => alert("Sorry somthing go wrong 😔"))

    onSubmitProps.setSubmitting(false)
}
const validate = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string()
        .min(20, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    msg: Yup.string().min(30, 'Too Short!')
        .max(1500, 'Too Long!')
        .required('Required'),
})
const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="h1 pb-3 fw-bold">
                            Contact now
                        </div>
                        <p className={contact.text}>
                            Have a project or question? Send me a message. I will reply within 48 hours.
                        </p>
                        <div className="mt-5">
                            <Formik initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validate}
                            >
                                {
                                    formik => {
                                        return (
                                            <Form>
                                                <div className="form-group mt-2">
                                                    <Field type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                                    <ErrorMessage name="name" render={(er) => <Error error={er} />} />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <Field type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                                                    <ErrorMessage name="email" render={(er) => <Error error={er} />} />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <Field type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    <ErrorMessage name="subject" render={(er) => <Error error={er} />} />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <Field as="textarea" className="form-control" name="msg" id="msg" placeholder="Write Your Message" />
                                                    <ErrorMessage name="msg" render={(er) => <Error error={er} />} />
                                                </div>

                                                <button type="submit" className={` shadow rounded-pill text-uppercase ${contact.btn}`}
                                                    disabled={formik.isSubmitting || !formik.isValid}>
                                                    <RiSendPlaneFill className="me-2" /> Send
                                                </button>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className={`rounded-2 bg-light p-4 ${contact.minWidth}`} >
                                <div className="">
                                    <div className="h4">Email me at</div>
                                    <a href="mailto:mohsenmnassri17@mail.com" className={`${contact.fw} text-purple`}>mohsenmnassri17@mail.com</a>
                                </div>
                                <div className="mt-5">
                                    <div className="h4">Call me</div>
                                    <a href="tel:+21652802352" className={`${contact.fw} text-purple`}>(+216)52 802 352</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
