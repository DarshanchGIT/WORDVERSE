import { publicKey, serviceId, templateId } from "../config/env";
import emailjs from "@emailjs/browser";
interface ContactProps {
  name: string;
  email: string;
  message: string;
}
export const sendEmail = async ({ name, email, message }: ContactProps) => {
  const templateParams = {
    form_name: name,
    form_email: email,
    to_name: "WORDVERSE",
    message: message,
  };
  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    alert("Messaging service down, Try again some time");
    console.log("Email JS error", error);
  }
};
