import React from "react";
import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  //   const date = new Date(1992, 7, 15);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {months[props.date.getUTCMonth() - 1]}
      </div>
      <div className="expense-date__year">{props.date.getUTCFullYear()}</div>
      <div className="expense-date__day">{props.date.getUTCDate()}</div>
    </div>
  );
}
