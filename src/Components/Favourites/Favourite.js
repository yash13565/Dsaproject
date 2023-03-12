import React, { useState, useEffect } from "react";
import Navbar from "../../Atom/Navbar/Navbar";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import style from "./Favourite.module.css";

export default function Favourite() {
  const previousContacts = JSON.parse(localStorage.getItem("favourite")) || [];
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [allContacts, setAllContacts] = useState(previousContacts);
  console.log(previousContacts);

  useEffect(() => {
    if (previousContacts.length > 0) {
      setShow(true);
    }
  }, [previousContacts]);

  const handleDelete = (e) => {
    const contacts = JSON.parse(localStorage.getItem("favourite")) || [];
    const otherContacts = contacts.filter((contact) => contact.value1 !== e);
    localStorage.setItem("favourite", JSON.stringify(otherContacts));
    setAllContacts(otherContacts);
  };


  return (
    <div>
      <Navbar />
      <div className={style.title}>
        <h1>Welcome to Favourite NPM packages</h1>
        {show ? (
          <>
            <CustomButton
              txt="Add fav"
              onClick={() => navigate("/")}
              className={style.btn}
            />
          </>
        ) : null}
      </div>

      {show ? (
        <>
          <div>
            {allContacts.map((x) => {
              return (
                <div className={style.cardmain}>
                  <div className={style.card}>
                    <p>{x.value1}</p>
                    <p>{x.value2}</p>
                    <CustomButton txt="Edit" className={style.btn} />
                    <CustomButton
                      txt="Delete"
                      onClick={() => handleDelete(x.value1)}
                      className={style.btn}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className={style.mainbox}>
          <div className={style.box}>
            <h3>You dont have any Favourite npm packages yet , Please Add</h3>
            <CustomButton
              txt="Add fav"
              onClick={() => navigate("/")}
              className={style.btn}
            />
          </div>
        </div>
      )}
    </div>
  );
}
