export default function getMainPath() {
  const url = window.location.href;
  const arr = url.split('/');
  arr.pop();
  const lastElem = arr[arr.length - 1];

  if (lastElem === 'search' || lastElem === 'person' || lastElem === 'home') {
    arr.pop();
    arr.pop();
  }
  return arr.join('/');
}
