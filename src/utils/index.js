export const generateCartId = () => `vsc-${Math.random().toString().slice(3, 9)}-${new Date().getFullYear()}`;

export default generateCartId;
