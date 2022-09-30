import { getToken } from "./JWT";

const isAuthenticated = () => !!getToken();

export default isAuthenticated;
