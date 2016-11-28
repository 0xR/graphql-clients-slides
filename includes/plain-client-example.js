function fetchGraphql(query, variables) {
  return fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((json) => {
      throw json;
    });
  });
}
