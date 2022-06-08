import { useParams } from "react-router-dom";
import { Fragment } from "react";

const QuoteDeatil = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Details!</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDeatil;
