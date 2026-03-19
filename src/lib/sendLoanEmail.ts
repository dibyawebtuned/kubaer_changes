import emailjs from "@emailjs/browser";

export const sendLoanEmail = async (form: HTMLFormElement) => {
  return emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SECONDID!,
    form,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
};
