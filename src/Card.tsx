import React from "react";
import styles from "./Card.module.scss";

// Card contents Collapsed
// Card title
// Card location (lorem ipsum)

// Card contents Uncollapse
// Card title
// Card location (lorem ipsum)
// Card Opening hours
// Card Carrier
// Select dropoff button

function SelectDropOffBtn() {
  return <button>Select drop off</button>;
}

function Card({
  cardIndex,
  cardTitle,
  cardDescription,
  cardPhoneNumber,
  cardOpeningHours,
  cardCarrier
}) {
  const [folded, setFolded] = React.useState(true);
  const fullHeightRef = React.useRef();

  // React.useLayoutEffect(() => {
  //   const elm = document.getElementById("measure-me");
  //   const fullHeight = elm?.getBoundingClientRect().height;
  //   const elm1 = document.getElementById("folded-me");
  //   if (elm && elm1) {
  //     const foldedHeight = elm1.offsetHeight;
  //     console.log("full:", fullHeight);
  //     console.log("folded:", foldedHeight);
  //     if (folded) {
  //       elm.style.setProperty("height", `${Math.ceil(foldedHeight)}px`);
  //     } else {
  //       elm.style.setProperty("height", "280px");
  //     }
  //   }
  // }, [folded]);

  return (
    <div id="measure-me" className={styles.card}>
      <div id="folded-me" style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ display: "inline", marginRight: 15 }}>
          {cardTitle} {cardIndex}
        </h3>
        <button onClick={() => setFolded(!folded)} style={{ height: 20 }}>
          {folded ? "Unfold" : "Fold"}
        </button>
      </div>

      <p>{cardDescription}</p>
      <p>{cardPhoneNumber}</p>
      <p>{cardCarrier}</p>
      <SelectDropOffBtn />
    </div>
  );
}

export default Card;
