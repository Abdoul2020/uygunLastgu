import React from "react";
import ItemText from "../Item/Item";
import Badge from "../Badge/Badge";
import { Grid, Typography } from "@mui/material";
//import seller4 from '../../../../../../Home/assets/housing.svg'

const SubMenu = ({ items }) => {
  return (
    <div>
      {" "}
      {items.map((item, index) => (
        <div className="block" key={index}>
          {" "}
          {CategoryName(item, index)}{" "}
          <div className="mt-2"> {ItemsList(item)} </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

const CategoryName = (item, index) => (
  <p
    className={`text-gray-500  text-xs font-sans font-semibold ${
      index === 1 && `mt-6`
    }`}
  >
    {item.categoryName}
  </p>
);

const ItemsList = (item) =>
  item.links &&
  item.links.map(({ name, route }, index) => Item(name, route, index));

const Item = (name, route, index) => (
  <div key={index} className={`flex justify-start my-2`}>
    <ItemText name={name} route={route} />
    {index === 0 && <Badge text="Yeni" />}
  </div>
);

export default SubMenu;

{
  /* <div>
        {items.map((item, index) => (

            <div className="block" key={index}>
                {CategoryName(item, index)}
                <div className="mt-2">
                    {ItemsList(item)}
                </div>
            </div>
        ))}
    </div> */
}
