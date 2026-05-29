import { useState } from "react";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import InputType from "../Form/InputType";
import API from "../../../services/API";

export default function Modal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 280);
  };

  const handleModelSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please provide all fields!");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        inventoryType,
        bloodGroup,
        email,
        quantity,
        organisation: user?._id,
      });
      if (data?.success) {
        alert("New Record Created!");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-15 px-4
        bg-primary-light/20 backdrop-blur-xs transition-opacity duration-280
        ${isClosing ? "opacity-0" : "opacity-100"}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        className={`w-full max-w-md rounded-3xl bg-primary-light/90 backdrop-blur-xl
          border border-primary-dark/50 shadow-[0_10px_40px_rgba(0,0,0,0.08),0_32px_60px_rgba(0,0,0,0.12)]
          ${
            isClosing
              ? "animate-[modalSlideOut_0.28s_cubic-bezier(0.4,0,1,1)_forwards]"
              : "animate-[modalDrop_0.35s_cubic-bezier(0.34,1.56,0.64,1)]"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary-dark/20">
          <h5 className="text-xl font-semibold text-primary-dark">
            Manage Blood Record
          </h5>
          <button
            onClick={handleClose}
            className="cursor-pointer w-10 h-10 rounded-xl flex items-center justify-center
              text-primary-dark/50 hover:text-primary-dark hover:bg-primary-dark/10
              transition-all duration-200"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3">
            Inventory Type: &nbsp;
            <div className="flex items-center gap-1">
              <input
                id="in"
                type="radio"
                name="inRadio"
                value="in"
                defaultChecked
                onChange={(e) => setInventoryType(e.target.value)}
                className="accent-primary-green"
              />
              <label htmlFor="in" className="cursor-pointer">
                IN
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                id="out"
                type="radio"
                name="inRadio"
                value="out"
                onChange={(e) => setInventoryType(e.target.value)}
                className="accent-primary-green"
              />
              <label htmlFor="out" className="cursor-pointer">
                OUT
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="bloodGroupSelect">Select Blood Group</label>
            <div className="relative">
              <select
                id="bloodGroupSelect"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                onMouseDown={() => setSelectOpen((prev) => !prev)}
                onBlur={() => setSelectOpen(false)}
                className="w-full appearance-none border border-primary-dark rounded-2xl
                  px-4 py-2 text-sm text-primary-dark outline-none cursor-pointer"
              >
                <option defaultValue={"Select a blood group"}>
                  Select a blood group
                </option>
                <option value={"O+"}>O+ (O Positive)</option>
                <option value={"O-"}>O- (O Negative)</option>
                <option value={"A+"}>A+ (A Positive)</option>
                <option value={"A-"}>A- (A Negative)</option>
                <option value={"B+"}>B+ (B Positive)</option>
                <option value={"B-"}>B- (B Negative)</option>
                <option value={"AB+"}>AB+ (AB Positive)</option>
                <option value={"AB-"}>AB- (AB Negative)</option>
              </select>
              <span className="flex items-center pointer-events-none absolute inset-y-0 right-4">
                <FiChevronDown
                  className={`text-primary-dark/40 transition-transform duration-200
                    ${selectOpen ? "rotate-180" : ""}`}
                  size={14}
                />
              </span>
            </div>
          </div>

          <InputType
            labelText={"Donor Email"}
            labelFor={"donorEmail"}
            inputType={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputType
            labelText={"Quantity (mL)"}
            labelFor={"quantity"}
            inputType={"number"}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 px-6 py-5 border-t border-primary-dark/20">
          <button
            onClick={handleClose}
            className="cursor-pointer text-sm bg-primary-light/50 border border-primary-dark/20
              px-3 py-1 rounded-full hover:bg-primary-dark/10 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer text-sm bg-primary-green text-primary-light
            hover:bg-primary-green/80 px-3 py-1 rounded-full transition-all duration-200"
            onClick={handleModelSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}