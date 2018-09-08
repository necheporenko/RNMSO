import fetch from 'isomorphic-unfetch';
import i18n from '../i18n';

const apiUrl = 'http://31.192.109.44/api';
const headers = { 'Accept-Language': i18n.language || 'en' };

export default async (url, options) => {
  const res = await fetch(`${apiUrl}${url}`, {
    headers,
    ...options
  })
  console.log(i18n.language);

  const json = await res.json()
  return json;
}