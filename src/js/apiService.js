const mainUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

function apiService({ whatToFind, pageNumber, perPage = '12', userKey }) {
  // &q=${whatToFind}
  // &page=${pageNumber}
  // &per_page=${perPage}
  // &key=${userKey}

  return fetch(
    `${mainUrl}&q=${whatToFind}&page=${pageNumber}&per_page=${perPage}&key=${userKey}`,
  )
    .then(responce => responce.json())
    .then(data => data.hits);
}
export default { apiService };
