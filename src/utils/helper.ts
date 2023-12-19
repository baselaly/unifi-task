export const customEmailValidation = () => {
  return (value: string) => {
    return /\S+@\S+\.\S+/.test(value); // Basic email format validation
  };
};

export const getLimitAndSkipOptions = (page: number, perPage: number) => {
  const skip = (page - 1) * perPage;
  return { skip, limit: perPage };
};

