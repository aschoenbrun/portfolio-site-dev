import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  FormStyles,
  FormField,
  FieldGroup,
  FormSubmission
} from "../../ContentForms";

// const sgMail = require("@sendgrid/mail");

export const SetDeliveryContext = React.createContext();

const ContactForm = props => {
  const [deliveryStat, setDeliveryStat] = useState("");

  const sendEmail = vals => {
    // TODO: Handle submit features
    // - Clear result message when focus on any field

    //TODO: Switch to MailGun

    emailjs
      .send(
        "gmail",
        "ays_portfolio_contact",
        vals,
        "user_8WpRLz9hq2WNWuftAgtAr"
      )
      .then(
        response => {
          setDeliveryStat("success");
        },
        err => {
          setDeliveryStat("failed");
        }
      );
  };

  // const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return (
    <SetDeliveryContext.Provider value={setDeliveryStat}>
      <FormStyles />
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
            .required("Required"),
          // phone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
          message: Yup.string().required("Required")
        })}
        onSubmit={(vals, actions) => {
          sendEmail(vals);
          actions.resetForm();
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <FieldGroup columns="2">
              <FormField
                fieldMainType="input"
                name="firstName"
                type="text"
                label="First Name"
                required
              />
              <FormField
                fieldMainType="input"
                name="lastName"
                type="text"
                label="Last Name"
                required
              />
            </FieldGroup>

            <FieldGroup columns="2">
              <FormField
                fieldMainType="input"
                name="email"
                type="text"
                label="Email"
                required
              />
              <FormField
                fieldMainType="input"
                name="phone"
                type="text"
                label="Phone"
              />
            </FieldGroup>

            <FormField
              fieldMainType="textarea"
              name="message"
              type="textarea"
              label="Message"
              required
            />
            <FormSubmission
              isSubmitting={isSubmitting}
              deliveryStat={deliveryStat}
              setDeliveryStat={setDeliveryStat}
              resetForm={resetForm}
            />
          </Form>
        )}
      </Formik>
    </SetDeliveryContext.Provider>
  );
};

export default ContactForm;
