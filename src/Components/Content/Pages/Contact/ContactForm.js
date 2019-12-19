import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

// const sgMail = require("@sendgrid/mail");

const ContactForm = () => {
  const sendEmail = vals => {
    console.log(vals);
    emailjs
      .send(
        "gmail",
        "ays_portfolio_contact",
        vals,
        "user_8WpRLz9hq2WNWuftAgtAr"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };
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
      onSubmit={vals => sendEmail(vals)}
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
        <button type="submit" value="Send">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
