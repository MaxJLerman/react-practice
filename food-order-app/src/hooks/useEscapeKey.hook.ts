import { useCallback, useEffect } from "react";

export const useEscapeKey = (handleClose: () => void) => {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      event.key === "Escape" && handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey, false);
    };
  }, [handleEscapeKey]);
};
