import React from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp, className, onExpire }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  return (
    <ul className="timeDetails">
    <li>
        <strong>{days}</strong>
        <span>DD</span>
    </li>
    <li>
        <strong>{hours}</strong>
        <span>HH</span>
    </li>
    <li>
        <strong>{minutes}</strong>
        <span>MM</span>
    </li>
    <li>
        <strong>{seconds}</strong>
        <span>SS</span>
    </li>
    </ul>   
  );
}
