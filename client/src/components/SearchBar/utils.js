export const validateCnjCode = (value) => {
  return value.match(/^\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}\s*/) != null;
};
