import { useCallback, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useInput(defaultValue: string) {
  const [input, setInput] = useState(defaultValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    []
  );
  const onReset = useCallback(() => setInput(""), []);
  return [input, onChange, onReset] as [
    string,
    typeof onChange,
    typeof onReset
  ];
}
