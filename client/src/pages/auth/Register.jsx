import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/shared/Loader";

export default function Register() {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen flex justify-center items-center tracking-tight -mt-25">
          <Form
            formType={"isRegister"}
            formTitle={"Create your new account"}
            formText={"Enter your details to get started"}
            submitBtn={"Sign Up"}
          />
        </div>
      )}
    </>
  );
}
