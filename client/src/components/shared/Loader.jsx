export default function Loader() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center -mt-25">
      <svg className="loader-svg" viewBox="0 0 200 200">
        <circle className="loader" cx="100" cy="100" r="80" />
      </svg>
      <h1 className="text-2xl font-medium tracking-tight mt-10">Loading..., Please wait!</h1>
    </div>
  );
}
