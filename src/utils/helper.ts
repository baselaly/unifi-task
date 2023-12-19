export const customEmailValidation = () => {
  return (value: string) => {
    return /\S+@\S+\.\S+/.test(value); // Basic email format validation
  };
};

