import axios from 'axios';

export async function getAPI(q, page) {
  // console.log(q, page);
  const data = await axios.get(
    `https://pixabay.com/api/?q=${q}&page=${page}&key=30541781-d1cfd5170773e7eb644cb816c&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(data.data.hits);
  return data;
}

export async function onClick(event, updateResult, page) {
  event.preventDefault();
  const query = event.target.elements.query.value.toLowerCase();
  // console.log(query);

  try {
    const result = await getAPI(query, page);
    // console.log(result);
    updateResult(result, query);
  } catch (error) {
    console.log(error);
  }
}

export async function onLoadMore(query, updateResult, page) {
  try {
    const result = await getAPI(query, page);
    // console.log(result);
    updateResult(result, query);
  } catch (error) {
    console.log(error);
  }
}
