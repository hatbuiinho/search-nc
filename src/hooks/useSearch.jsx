import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearch(api, method, searchValue) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
  }, [searchValue]);

  useEffect(() => {
    setError(false);
    let cancel;
    if (searchValue) {
      setLoading(true);

      axios({
        method,
        url: api,
        params: { searchValue },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }

    return () => searchValue && cancel();
  }, [searchValue]);

  return { loading, error, data };
}
