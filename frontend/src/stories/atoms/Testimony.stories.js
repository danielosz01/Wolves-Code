import React from "react";

import Testimony from "../../components/molecules/Testimony";

//assets
//--> eliminar esto
import person from "../../assets/person.png";

export default {
  title: "Components/Testimony",
  component: Testimony,
};

const client = {
  text:
    "Be fearful when others are greedy and to be greedy only when others are fearful.",
  record: 5,
  clientImg: person,
  clientName: "Warren Buffett",
  clientCharge: "Genius and old man",
  businessName: "Mc Donals",
  businessImg: person,
};

export const Primary = () => (
  <Testimony
    testimonyMessage={client.text}
    record={client.record}
    clientImg={client.clientImg}
    clientName={client.clientName}
    clientCharge={client.clientCharge}
    businessName={client.businessName}
    businessImg={client.businessImg}
  />
);
Primary.storyName = "Card";
