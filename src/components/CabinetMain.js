import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services";

export default function CabinetMain(props) {
  let id = props.userId;
  let [userInfo, setUserInfo] = useState("");
  function handleAddRole() {}
  function handleShowAdditionalInfo() {}

  function updateUserInfo(res) {
    console.log("xxx", ...res);
    setUserInfo(...res);
  }

  useEffect(() => {
    getUserInfo(id, updateUserInfo);
  }, [id]);

  return (
    <>
      {userInfo ? (
        <>
          <section className="section-main">
            <div className="user-info">
              <img className="user-logo" alt="user-logo"></img>
              <p className="text-big">{userInfo.userName}</p>
            </div>
            <div className="user-info">
              <div className="list-of-roles">
                {userInfo.userRole.map((item) => {
                  return (
                    <div className="role-wrapper">
                      <div className="small-container role-symbol"></div>
                      <p>{item.type}</p>
                    </div>
                  );
                })}
              </div>
              <div className="add-role-wrapper">
                <div className="small-container btn-add"></div>
                <p onClick={handleAddRole}>Добавить роль</p>
              </div>
            </div>
            <div className="user-info">
              <div className="additional-info-wrapper">
                <div className="small-container btn-add-info"></div>
                <p onClick={handleShowAdditionalInfo}>Добавить роль</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div>no data</div>
        </>
      )}
    </>
  );
}
