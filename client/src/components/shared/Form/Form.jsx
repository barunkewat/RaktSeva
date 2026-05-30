import { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authServices";
import { FiChevronDown } from "react-icons/fi";

export default function Form({ formType, formTitle, formText, submitBtn }) {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        onSubmit={(e) => {
          if (formType === "isLogin")
            return handleLogin(e, email, password, role);
          else if (formType === "isRegister")
            return handleRegister(
              e, role, name, email, password,
              organisationName, hospitalName, website, address, phone,
            );
        }}
        className="flex flex-col w-full p-5 sm:p-8 md:p-10 border-2 border-primary-dark rounded-2xl sm:rounded-4xl space-y-3"
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tighter">
          {formTitle}
        </h2>
        <p className="text-primary-dark/80 text-sm pb-2">{formText}</p>

        {/* Role Dropdown */}
        <div className="flex flex-col gap-1">
          <label htmlFor="roleSelect" className="text-sm text-primary-dark">
            Select Role
          </label>
          <div className="relative">
            <select
              id="roleSelect"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              onMouseDown={() => setSelectOpen((prev) => !prev)}
              onBlur={() => setSelectOpen(false)}
              className="w-full appearance-none border border-primary-dark rounded-2xl px-4 py-2.5 pr-10 text-sm text-primary-dark outline-none cursor-pointer bg-white"
            >
              <option>Select your role</option>
              <option value="admin">Admin</option>
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
              <option value="organisation">Organisation</option>
            </select>
            <div className="flex items-center pointer-events-none absolute inset-y-0 right-4">
              <FiChevronDown
                className={`text-primary-dark/40 transition-transform duration-200 ${
                  selectOpen ? "rotate-180" : ""
                }`}
                size={14}
              />
            </div>
          </div>
        </div>

        {/* Login Fields */}
        {formType === "isLogin" && (
          <div className="flex flex-col gap-3">
            <InputType
              labelFor="forEmail" labelText="Email"
              inputType="email" name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelFor="forPassword" labelText="Password"
              inputType="password" name="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-primary-green hover:bg-primary-green/90 text-white text-lg font-medium py-2.5 mt-1 rounded-2xl cursor-pointer transition-colors"
              type="submit"
            >
              {submitBtn}
            </button>
          </div>
        )}

        {/* Register Fields */}
        {formType === "isRegister" && (
          <div className="flex flex-col gap-3">
            {/* Name fields — full width always */}
            {(role === "admin" || role === "donor") && (
              <InputType
                labelFor="forName" labelText="Name"
                inputType="text" name="name"
                value={name} onChange={(e) => setName(e.target.value)}
              />
            )}
            {role === "hospital" && (
              <InputType
                labelFor="forHospitalName" labelText="Hospital Name"
                inputType="text" name="hospitalName"
                value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}
              />
            )}
            {role === "organisation" && (
              <InputType
                labelFor="forOrganisationName" labelText="Organisation Name"
                inputType="text" name="organisationName"
                value={organisationName} onChange={(e) => setOrganisationName(e.target.value)}
              />
            )}

            {/* 2-col grid only on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputType
                labelFor="forEmail" labelText="Email"
                inputType="email" name="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <InputType
                labelFor="forPassword" labelText="Password"
                inputType="password" name="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <InputType
                labelFor="forWebsite" labelText="Website URL"
                inputType="text" name="website"
                value={website} onChange={(e) => setWebsite(e.target.value)}
              />
              <InputType
                labelFor="forPhone" labelText="Phone Number"
                inputType="text" name="phone"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Address — always full width */}
            <InputType
              labelFor="forAddress" labelText="Address"
              inputType="text" name="address"
              value={address} onChange={(e) => setAddress(e.target.value)}
            />

            <button
              className="w-full bg-primary-green hover:bg-primary-green/90 text-white text-lg font-medium py-2.5 mt-1 rounded-2xl cursor-pointer transition-colors"
              type="submit"
            >
              {submitBtn}
            </button>
          </div>
        )}

        {/* Footer link */}
        <div className="flex items-center justify-center gap-1 pt-1 text-sm tracking-tight text-primary-dark/60">
          <span>
            {formType === "isLogin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <Link
            to={formType === "isLogin" ? "/register" : "/login"}
            className="text-primary-green font-semibold hover:underline underline-offset-2"
          >
            {formType === "isLogin" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </form>
    </div>
  );
}