/*  
    - Using the `map()` method to show a list of words beginning with the letter "C" from an array.
*/
const wordsWithC = `Cats, Crafts, Crayons, Crochet, Craftswoman, Craftsmanship, Collage, Crafting, Crazy-glue, Creative, Candle, Chair, Circles, Coffee, Cup, Clock, Clips, Cut, Create, Cookie Cutters, Clock, Candy, Card`;

let cWordArr = wordsWithC.split(", ");

let listItems = cWordArr.map((word, index) => {
  return <li key={index}>{word}</li>;
});

export default function FourOFour() {
  return (
    <div>
      <h1>404 - Uh-oh! That page doesn't exist!</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1353/1353492.png"
        alt="c is for cat"
        width="150px"
      />
      <div>
        C is for:
        <ul>
            {listItems}
        </ul>
      </div>
    </div>
  )
};