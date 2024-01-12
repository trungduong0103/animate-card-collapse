import "./styles.css";

import Card from "./Card";
// import { DATA } from "./Data";
// const CARD_DATA = DATA.map((value, index) => ({
//   cardIndex: index,
//   cardTitle: value.title,
//   cardDescription: value.description,
//   cardOpeningHours: [
//     {
//       from: "1",
//       to: "5"
//     },
//     {
//       from: "1",
//       to: "5"
//     },
//     {
//       from: "1",
//       to: "5"
//     },
//     {
//       from: "1",
//       to: "5"
//     }
//   ],
//   cardPhoneNumber: value.phoneNumber,
//   cardCarrier: "DHL Express"
// }));

const DATA = {
  createdAt: "2022-11-14T10:55:41.088Z",
  title: "Jeffrey Weissnat",
  description:
    "Voluptates distinctio aut dignissimos vel aliquam. Sed et alias asperiores qui recusandae ut ut ut.",
  phoneNumber: "1-461-476-4975 x2432",
  id: "1"
};

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <Card
        cardIndex={0}
        cardTitle={DATA.title}
        cardDescription={DATA.description}
        cardPhoneNumber={DATA.phoneNumber}
        cardCarrier="DHL Express"
        cardOpeningHours={[{ from: "1", to: "5" }]}
      />
    </div>
  );
}
