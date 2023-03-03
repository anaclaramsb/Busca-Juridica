export const validateCnjCode = (value) =>{
    return value.match(/\s*\d+\-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}\s*/) != null;
}