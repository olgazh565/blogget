export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';

  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
  }

  return token;
};

// export const useToken = (state) => {
//   const [token, setToken] = useState(state);

//   useEffect(() => {
//     if (location.pathname.includes('/auth')) {
//       const token = new URLSearchParams(location.hash.substring(1))
//         .get('access_token');
//       setToken(token);
//     }

//     if (localStorage.getItem('bearer')) {
//       setToken(localStorage.getItem('bearer'));
//     }
//   }, []);

//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('bearer', token);
//     }
//   }, [token]);

//   const delToken = () => {
//     if (!localStorage.getItem('bearer')) return;
//     localStorage.removeItem('bearer');
//   };

//   return [token, delToken];
// };
