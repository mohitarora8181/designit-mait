"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Props {
    img: any;
}


export default function MyCard({img}: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-[300px] h-[300px] rounded-xl">
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-4}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="400"
            width="400"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
