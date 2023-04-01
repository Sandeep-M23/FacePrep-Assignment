import { useState, useEffect, useCallback } from "react";

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface FetchResult {
  loading: boolean;
  users: User[];
}

const useFetch = (page: number): FetchResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=10`
      );
      const data = await response.json();
      setUsers((prev) => [...prev, ...data.results]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [page]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { loading, users };
};

export default useFetch;
