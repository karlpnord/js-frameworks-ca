import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from '../ui/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import yupScheme from '../../utils/yupScheme';

const ContactForm = ({ formSuccess }) => {
  const { 
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupScheme),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    formSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Input register={register} label={'Full Name'} type={'text'} name={'fullName'} required={true} min={3} max={30} error={errors.firstName?.message}/>
      <Input register={register} label={'Subject'} type={'text'} name={'subject'} required={true} min={3} max={30} error={errors.subject?.message}/>
      <Input register={register} label={'Email'} type={'email'} name={'email'} required={true} error={errors.email?.message}/>
      <Input register={register} label={'Body'} type={'text'} name={'body'} required={true} min={3} max={100} error={errors.body?.message}/>
      <Button type={'primary'} text={'Submit'}/>
    </form>
  )
}

export default ContactForm;
