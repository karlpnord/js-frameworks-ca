import Form from '../../components/form/ContactForm';
import { useState } from 'react';
import ContactModal from '../../components/form/ContactModal';

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  
  const submitSuccess = () => {
    setFormSuccess(true);
  }

  return (
    <main className='flex-1 container font-inter max-w-[640px] mx-auto'>
      <div className='flex flex-col gap-2 px-6 py-8 my-14 border border-gray-300 bg-white dark:bg-zinc-800 dark:border-zinc-700'>
        <h1 className='font-semibold text-2xl text-gray-900 mb-2 dark:text-gray-50'>Contact us!</h1>
        <Form formSuccess={submitSuccess}/>
        {formSuccess && <ContactModal />}
      </div>
    </main>
  )
};

export default Contact;
