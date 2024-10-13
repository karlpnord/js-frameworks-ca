import PropTypes from 'prop-types';

const Input = ({ register, label, name, required = false, min, max, error, type = 'text' }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className='text-sm text-gray-900 dark:text-gray-100'>
        {label}
      </label>
      <input 
        { ...register(name, {
          required: required,
          minLength: min,
          maxLength: max,
        })}
        name={name}
        id={name}
        type={type}
        className='bg-zinc-50 border border-gray-300 text-gray-900 p-2 dark:text-white dark:bg-zinc-600 dark:border-zinc-700 dark:placeholder:text-gray-300'
      />
      <div className="text-red-500 text-sm">{error}</div>
    </div>
  )
};

Input.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
