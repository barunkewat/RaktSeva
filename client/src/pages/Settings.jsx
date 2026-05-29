import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/shared/Layout/Layout";
import InputType from "../components/shared/Form/InputType";
import Loader from "../components/shared/Loader";
import { updateProfile } from "../services/authActions";
import { FiChevronDown } from "react-icons/fi";

const bloodGroups = [
  { value: "", label: "Select blood group" },
  { value: "O+", label: "O+ (O Positive)" },
  { value: "O-", label: "O- (O Negative)" },
  { value: "A+", label: "A+ (A Positive)" },
  { value: "A-", label: "A- (A Negative)" },
  { value: "B+", label: "B+ (B Positive)" },
  { value: "B-", label: "B- (B Negative)" },
  { value: "AB+", label: "AB+ (AB Positive)" },
  { value: "AB-", label: "AB- (AB Negative)" },
];

const roleLabels = {
  admin: "Admin",
  donor: "Donor",
  hospital: "Hospital",
  organisation: "Organisation",
};

function buildFormFromUser(user) {
  if (!user) {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      organisationName: "",
      hospitalName: "",
      bloodGroup: "",
    };
  }

  return {
    name: user.name ?? "",
    email: user.email ?? "",
    phone: user.phone ?? "",
    address: user.address ?? "",
    website: user.website ?? "",
    organisationName: user.organisationName ?? "",
    hospitalName: user.hospitalName ?? "",
    bloodGroup: user.bloodGroup ?? "",
  };
}

export default function Settings() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [form, setForm] = useState(buildFormFromUser(user));
  const [bloodSelectOpen, setBloodSelectOpen] = useState(false);

  useEffect(() => {
    setForm(buildFormFromUser(user));
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      website: form.website.trim(),
    };

    if (user?.role === "admin" || user?.role === "donor") {
      payload.name = form.name.trim();
    }

    if (user?.role === "organisation") {
      payload.organisationName = form.organisationName.trim();
    }

    if (user?.role === "hospital") {
      payload.hospitalName = form.hospitalName.trim();
    }

    if (user?.role === "donor" && form.bloodGroup) {
      payload.bloodGroup = form.bloodGroup;
    }

    dispatch(updateProfile(payload));
  };

  if (!user) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight">
          Settings
        </h1>
        <p className="mt-2 text-sm text-primary-dark/60">
          Update your profile details. Your role cannot be changed here.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-green/10 px-3 py-1">
          <span className="text-xs font-semibold text-primary-green uppercase tracking-wide">
            {roleLabels[user.role] ?? user.role}
          </span>
        </div>

        {loading ? (
          <div className="mt-10">
            <Loader />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded-2xl border border-primary-dark/10 bg-primary-light p-4 sm:p-6 shadow-sm"
          >
            {(user.role === "admin" || user.role === "donor") && (
              <InputType
                labelFor="settingsName"
                labelText="Name"
                name="name"
                value={form.name}
                inputType="text"
                onChange={handleChange}
              />
            )}

            {user.role === "organisation" && (
              <InputType
                labelFor="settingsOrganisationName"
                labelText="Organisation Name"
                name="organisationName"
                value={form.organisationName}
                inputType="text"
                onChange={handleChange}
              />
            )}

            {user.role === "hospital" && (
              <InputType
                labelFor="settingsHospitalName"
                labelText="Hospital Name"
                name="hospitalName"
                value={form.hospitalName}
                inputType="text"
                onChange={handleChange}
              />
            )}

            <InputType
              labelFor="settingsEmail"
              labelText="Email"
              name="email"
              value={form.email}
              inputType="email"
              onChange={handleChange}
            />

            <InputType
              labelFor="settingsPhone"
              labelText="Phone Number"
              name="phone"
              value={form.phone}
              inputType="tel"
              onChange={handleChange}
            />

            <InputType
              labelFor="settingsAddress"
              labelText="Address"
              name="address"
              value={form.address}
              inputType="text"
              onChange={handleChange}
            />

            {(user.role === "organisation" || user.role === "hospital") && (
              <InputType
                labelFor="settingsWebsite"
                labelText="Website"
                name="website"
                value={form.website}
                inputType="url"
                onChange={handleChange}
              />
            )}

            {user.role === "donor" && (
              <div className="flex flex-col text-sm">
                <label htmlFor="settingsBloodGroup">Blood Group</label>
                <div className="relative mt-1">
                  <select
                    id="settingsBloodGroup"
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={handleChange}
                    onMouseDown={() => setBloodSelectOpen((prev) => !prev)}
                    onBlur={() => setBloodSelectOpen(false)}
                    className="w-full appearance-none font-medium px-4 py-2 rounded-2xl border border-primary-dark outline-none cursor-pointer"
                  >
                    {bloodGroups.map((group) => (
                      <option key={group.value || "empty"} value={group.value}>
                        {group.label}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center pointer-events-none absolute inset-y-0 right-4">
                    <FiChevronDown
                      className={`text-primary-dark/40 transition-transform duration-200 ${
                        bloodSelectOpen ? "rotate-180" : ""
                      }`}
                      size={14}
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto mt-2 px-8 py-2.5 rounded-full bg-primary-green text-primary-light font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Save changes
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
