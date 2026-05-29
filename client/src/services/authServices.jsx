import store from "../redux/store";
import { userLogin, userRegister } from "./authActions";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please provide all fields!");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  role,
  name,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone,
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        role,
        name,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      }),
    );
  } catch (error) {
    console.log(error);
  }
};
