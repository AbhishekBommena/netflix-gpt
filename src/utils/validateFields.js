export const validateFields = (email, password) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isValidEmail) return "Email ID is not valid.";
    if(!isValidPassword) return "Password is not valid.";

    return null;
}