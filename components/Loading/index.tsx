import spinner from "@/public/spinner.svg"

const Loading = () => (
  <div className="flex justify-center mt-12">
    <img src={spinner} height="50px" alt="Loading"/>
  </div>
);

export default Loading;