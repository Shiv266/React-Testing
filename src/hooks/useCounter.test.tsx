import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 0,
    });
    expect(result.current.count).toBe(0);
  });
  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 0,
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 0,
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
