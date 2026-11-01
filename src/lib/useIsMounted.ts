"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * useIsMounted: React 18/19 safe hook that returns false on the server
 * and true on the client, avoiding hydration mismatches and synchronous setState-in-effect warnings.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
