import React from "react";

const AddButton = () => {
  return (
    <>
      <section
        className="addButton__section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 20px",
          borderBottom: "1px solid lightGrey",
          borderTop: "1px solid lightGrey",
          margin: "10px 10px",
          boxSshadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <span style={{ fontWeight: "600", fontSize: "larger" }}>
          Student Section
        </span>
        <button className="addNewBtn">Add New Student</button>
      </section>
    </>
  );
};

export default AddButton;
