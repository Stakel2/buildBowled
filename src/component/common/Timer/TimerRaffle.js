import React from "react";
import { useTimer } from "react-timer-hook";

export default function TimerRaffle({ expiryTimestamp, className, onExpire }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <ul>
      <li>
        <strong>{days}</strong>
        <span>Days</span>
      </li>
      <li>
        <strong>{hours}</strong>
        <span>Hours</span>
      </li>
      <li>
        <strong>{minutes}</strong>
        <span>Minutes</span>
      </li>
      <li>
        <strong>{seconds}</strong>
        <span>Seconds</span>
      </li>
    </ul>
  );
}
