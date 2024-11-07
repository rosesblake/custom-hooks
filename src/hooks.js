import { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

function useFlip(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
}

function useAxios(arg) {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (endpoint = arg) => {
    setIsLoading(true);
    try {
      const response = await axios.get(endpoint);
      setRes({ ...response.data, id: uuid() });
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  };

  return { res, error, isLoading, fetchData };
}

export { useFlip, useAxios };
