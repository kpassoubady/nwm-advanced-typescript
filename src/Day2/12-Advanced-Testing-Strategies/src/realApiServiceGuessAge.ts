
// Based on the name, guess the age of the user
export const guessAgeFromAgify = async (name: string): Promise<{ count: number, name: string, age:number }> => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  const age = await response.json();
  return age;
};

