import { RefHandle } from "$/utils/types";
import { createRef, MutableRefObject, useEffect, useState } from "react";

const useRefArray = <T extends HTMLElement | RefHandle>(length: number) => {
  const [refs, setRefs] = useState<MutableRefObject<T>[]>([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(length)
        .fill(0)
        .map((_, i) => refs[i] || createRef<T>())
    );
  }, [length]);
  return refs;
};

export default useRefArray;
