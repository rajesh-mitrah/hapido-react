export const handleKeyPress = e => {
  if (!/^[0-9]+$/.test(e.key)) {
    e.preventDefault();
  }
};
