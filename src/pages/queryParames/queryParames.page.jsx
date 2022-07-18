import { useLocation } from "react-router-dom";
const QueryParamsPage = () => {
  const location = useLocation();
  const qParams = new URLSearchParams(location.search);

  return (
    <div>
      <h1>what im looking for?</h1>
      <h2>{qParams.get("q")}</h2>
    </div>
  );
};
export default QueryParamsPage;
