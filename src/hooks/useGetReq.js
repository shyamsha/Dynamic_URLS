import { useState, useEffect } from "react";

const useGetReq = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          let response = [];
          json.forEach((element) => {
            response.push({
              name: element.title,
              description: element.body,
            });
          });
          setData(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [url]);
  // console.log("data", url);
  return [data, isLoading, error];
};

export default useGetReq;
