export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return [
    padTo2Digits(date?.getDate()),
    padTo2Digits(date?.getMonth() + 1),
    date?.getFullYear(),
  ].join('/');
};

function padTo2Digits(num) {
  return num?.toString().padStart(2, '0');
}
