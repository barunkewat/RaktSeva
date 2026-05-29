export default function InputType({
  labelFor,
  labelText,
  name,
  value,
  inputType,
  onChange,
}) {
  return (
    <div className="flex flex-col text-sm">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        className="font-medium px-4 py-2 rounded-2xl border border-primary-dark outline-none"
        placeholder={`Enter your ${labelText?.toLowerCase()}`}
        id={labelFor}
        name={name}
        value={value}
        type={inputType}
        onChange={onChange}
      />
    </div>
  );
}