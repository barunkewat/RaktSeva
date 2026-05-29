import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/shared/Loader";

export default function Login() {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
    {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen flex justify-center items-center tracking-tight -mt-25">
          <Form
            formType={"isLogin"}
            formTitle={"Sign in to your account"}
            formText={"Enter your email and password to access your account"}
            submitBtn={"Sign In"}
          />
        </div>
      )}
    </>
  );
}