import React, { useState } from "react";
import { Form } from "react-bootstrap";
import arrowList from "../../../../assets/images/arrow_list_sidebar.svg";

const SidebarCheckRadio = (props) => {
  const { filterList, filterPayload, setFilterPayload, title } = props;
  const [check, setCheck] = useState(false);
  console.log(" check:", check);
  return (
    <ul className="cm_items">
      {props.filterList.map((item, index) => (
        <>
          {item.country_name && (
            <li className={`cm_item ${props.listClass}`} key={`${item.id}`}>
              <span className="icon_image_flag">
                <img src={item.logo} alt={props.country_name} />
              </span>
              <Form.Check
                type={item.type}
                name={item.country_name}
                id={`${item.id}`}
                label={`${item.country_name}`}
                onChange={(e) => {
                  e.target.checked ? setCheck("yes") : setCheck("no");
                  if (e.target.checked) {
                    filterPayload.country =
                      filterPayload.country + item.id + ",";
                    setFilterPayload(filterPayload);
                  } else {
                    filterPayload.country = filterPayload.country.replace(
                      item.id + ",",
                      ""
                    );
                    setFilterPayload(filterPayload);
                  }
                }}
              />
            </li>
          )}
          {item.year && (
            <li className={`cm_item ${props.listClass}`} key={`${item.year}`}>
              <span className="icon_image">
                <img src={arrowList} alt={props.country_name} />
              </span>
              <Form.Check
                type={item.type}
                name={item.year}
                id={`${item.year}`}
                label={`${item.year} (${item.total ? item.total : ""})`}
                onChange={(e) => {
                  e.target.checked ? setCheck("yes") : setCheck("no");
                  if (e.target.checked) {
                    filterPayload.session =
                      filterPayload.session + item.year + ",";
                    setFilterPayload(filterPayload);
                  } else {
                    filterPayload.session = filterPayload.session.replace(
                      item.year + ",",
                      ""
                    );
                    setFilterPayload(filterPayload);
                  }
                }}
              />
            </li>
          )}
          {item.value && (
            <li className={`cm_item ${props.listClass}`} key={`${item.value}`}>
              <span className="icon_image">
                <img src={arrowList} alt="icon" />
              </span>
              <Form.Check
                type={item.type}
                name={item.value}
                id={`${item.value}`}
                label={`${item.label}`}
                defaultChecked={false}
                onChange={(e) => {
                  e.target.checked ? setCheck("yes") : setCheck("no");
                  if (e.target.checked) {
                    if (title == "Rarity") {
                      filterPayload.rarity = 
                        filterPayload.rarity + item.value + ",";
                      setFilterPayload(filterPayload);
                    }
                    if (title == "Player Type ") {
                      filterPayload.cardType =
                        filterPayload.cardType + item.value + ",";
                      setFilterPayload(filterPayload);
                    }

                    if (title == "Type") {
                      filterPayload.nftType =
                        filterPayload.nftType + item.value + ",";
                      setFilterPayload(filterPayload);
                    }
                    if (title == "Category") {
                      filterPayload.mintType =
                        filterPayload.mintType + item.value + ",";
                      setFilterPayload(filterPayload);
                    }

                  } else {
                    if (title == "Rarity") {
                      filterPayload.rarity = filterPayload.rarity.replace(
                        item.value + ",",
                        ""
                      );
                      setFilterPayload(filterPayload);
                    }
                    if (title == "Player Type") {
                      filterPayload.cardType = filterPayload.cardType.replace(
                        item.value + ",",
                        ""
                      );
                      setFilterPayload(filterPayload);
                    }

                    if (title == "Type") {
                      filterPayload.nftType = filterPayload.nftType.replace(
                        item.value + ",",
                        ""
                      );
                      setFilterPayload(filterPayload);
                    }

                    if (title == "Category") {
                      filterPayload.mintType = filterPayload.mintType.replace(
                        item.value + ",",
                        ""
                      );
                      setFilterPayload(filterPayload);
                    }

                  }
                }}
              />
            </li>
          )}
        </>
      ))}
    </ul>
  );
}
export default SidebarCheckRadio;