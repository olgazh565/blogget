import {useContext, useEffect, useState} from 'react';
import {TokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const useCommentsData = (id) => {
  const {token, delToken} = useContext(TokenContext);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          delToken();
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return [commentsData];
};
