import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
   {id: 'q1', author: 'Max', text: 'Learning react is fun!'},
   {id: 'q2', author: 'Luka', text: 'Learning react is great!'},
];

const AllQuotes = () => {
   return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;