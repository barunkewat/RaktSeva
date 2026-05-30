import { useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/shared/Loader";

export default function Login() {
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-start sm:items-center px-4 py-10 tracking-tight">
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