import { useRouteError } from "react-router-dom";

export function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Ooops!!! {err.status}</h1>
      <p>something went wrong😺</p>
    </>
  );
}
