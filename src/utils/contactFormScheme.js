import * as yup from 'yup';

const contactFortSchema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your full name must be at least 3 characters.')
      .required('Please enter your full name.'),
    subject: yup.string().required('Please enter the subject.').min(3, 'Your subject must be at least 3 characters.'),
    email: yup.string().email('Invalid email format').required('Please enter your email.'),
    body: yup.string().required('Please enter your message.').min(3, 'Your message must be at least 3 characters.'),
  })
  .required();

export default contactFortSchema;
