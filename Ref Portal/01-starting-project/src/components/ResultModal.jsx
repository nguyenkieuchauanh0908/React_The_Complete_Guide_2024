import { forwardRef } from "react";

export const ResultModal = forwardRef(function ({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}!</h2>
      <p>
        The target time was: <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with <strong>X seconds left</strong>
      </p>
      ;
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
