import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from "../quotes/HighlightedQuote";

import Comments from "../comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Luka", text: "Learning react is great!" },
];

const QuoteDeatil = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDeatil;
