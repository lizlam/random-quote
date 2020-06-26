
exports.handler = async (event, context) => {

  const quotes = [
    {"quote": "You gotta be kidding me?"},
    {"quote": "Will you be my neighbor?"}, 
    {"quote": "Liz is awesome!"}
  ]; 
  const number = Math.floor(Math.random() * quotes.length);
  const quote = quotes[number];
  return {
    statusCode: 200,
    body: JSON.stringify(quote)
  };

};
