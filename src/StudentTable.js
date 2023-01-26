import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AddButton from "./AddButton";

const StudentTable = () => {
  const arr = [
    {
      Name: "Abhijeet",
      Age: "19",
      Course: "MERN",
      Batch: "EA17",
    },
    {
      Name: "Omkar",
      Age: "29",
      Course: "Data-Sci",
      Batch: "EA17",
    },
    {
      Name: "Geet",
      Age: "22",
      Course: "Devops",
      Batch: "EA17",
    },
    {
      Name: "Prachi",
      Age: "27",
      Course: "Java",
      Batch: "EA17",
    },
    {
      Name: "Abhinav",
      Age: "28",
      Course: "MEAN",
      Batch: "EA18",
    },
    {
      Name: "Abhinav",
      Age: "28",
      Course: "MEAN",
      Batch: "EA18",
    },
  ];
  return (
    <>
      <Navbar />
      <AddButton />
      <section className="student__section">
        {
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Batch</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>

            {arr.map((item, id) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td>
                      <NavLink to={"/"}>
                        <i className="fa-solid edit fa-pen-to-square"></i>
                      </NavLink>
                    </td>
                    <td>
                      <i className="fa-solid delete fa-trash"></i>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        }
      </section>
    </>
  );
};

export default StudentTable;
