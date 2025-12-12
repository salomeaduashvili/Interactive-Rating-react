import "./Rate.css";
export default function Rate({ setSubmit, rate, setRate }) {
  const buttonsArr = [1, 2, 3, 4, 5];
  console.log(rate);
  return (
    <section>
      <div className="imagediv">
        <img src="./images/icon-star.svg" alt="star icon" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated!
      </p>
      <div className="buttons">
        {buttonsArr.map((item) => (
          <button
            key={item}
            onClick={() => setRate(item)}
            style={{ backgroundColor: rate === item ? "white" : "" }}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="submit" onClick={() => rate && setSubmit(true)}>
        Submit
      </button>
    </section>
  );
}
