export default function TableWrapper({ children, className = "" }) {
  return (
    <div
      className={`w-full overflow-x-auto overscroll-x-contain rounded-lg ${className}`}
    >
      <div className="min-w-xl">{children}</div>
    </div>
  );
}
