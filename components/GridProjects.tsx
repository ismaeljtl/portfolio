import React, { FC } from "react";
import IBlock from "../interfaces/block.interface";
import IItem from "../interfaces/item.interface";
import Project from "./Project";

const GridProjects: FC<IBlock> = ({ itemsCollection }) => {
  return (
    <section>
      {itemsCollection &&
        itemsCollection.items.map((project: IItem) => (
          <Project key={project.sys.id} {...project} />
        ))}
    </section>
  );
};

export default GridProjects;
