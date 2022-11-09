import { useEffect, useState } from 'react';
import axios from 'axios';

const SEARCH_API =
  'https://script.google.com/macros/s/AKfycbxePdkUW0tk_qxTB6-r0Do9DQd7jRIyzLtkpznRbpKM2TwZ58Wm4t98fWStrTnCR8-k/exec';

export default function useSearch(searchValue) {
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
        method: 'post',
        url: SEARCH_API,
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
