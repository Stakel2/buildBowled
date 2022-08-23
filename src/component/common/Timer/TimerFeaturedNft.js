import React from "react";
import { useTimer } from "react-timer-hook";

export default function TimerRaffle({ expiryTimestamp, className, onExpire }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp
  });

  return (
    <ul className="timeDetails">
      <li>
        <strong>{days} d</strong>
      </li>-
      <li>
        <strong>{hours} h</strong>
      </li>-
      <li>
        <strong>{minutes} m</strong>
      </li>-
      <li>
        <strong>{seconds} s</strong>
      </li>
    </ul>
  );
}
