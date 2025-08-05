// Style One
/* const playGuitar = () => {
  return "Playing Guitar!";
};

const shredding = () => {
  return "Shredding some licks!";
};

const plucking = () => {
  return "Plucking the strings...!";
};

export default playGuitar;
export { shredding, plucking }; */

//Style 2: Exporting inline
/* export default function playGuitar() {
  return "Playing Guitar!";
};

 export const shredding = () => {
  return "Shredding some licks!";
};

export const plucking = () => {
  return "Plucking the strings...!";
}; */

//Method 3: Removing the default keyword in case of multiple export to avoid confusion.
export function playGuitar() {
  return "Playing Guitar!";
}

export const shredding = () => {
  return "Shredding some licks!";
};

export const plucking = () => {
  return "Plucking the strings...!";
};
