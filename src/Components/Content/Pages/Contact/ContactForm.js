import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const sgMail = require("@sendgrid/mail");

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        //TODO: Deal with CORS in localhost testing environment

        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);

        sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

        const myEmail = process.env.REACT_APP_MYEMAIL;

        const msg = {
          to: myEmail,
          from: values.email,
          subject: `AYS Portfolio contact submission from ${values.firstName} ${values.lastName}`,
          phone: values.phone,
          text: values.message
        };
        console.log(msg);
        sgMail.send(msg);
      }}
    >
      <Form>
        <div className="form__field" id="firstName">
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </div>
        <div className="form__field" id="lastName">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </div>
        <div className="form__field" id="email">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form__field" id="phone">
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="phone" />
        </div>
        <div className="form__field" id="message">
          <label htmlFor="message">Message</label>
          <Field name="message" type="textarea" as="textarea" />
          <ErrorMessage name="message" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
