import { useState, useRef, useCallback, useEffect } from "react";

interface InfiniteScrollResult {
  loadMoreRef: React.RefObject<HTMLDivElement>;
  page: number;
}

const useInfiniteScroll = (): InfiniteScrollResult => {
  const [page, setPage] = useState<number>(1);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      console.log(page);
    }
  }, []);

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  return { loadMoreRef, page };
};

export default useInfiniteScroll;
