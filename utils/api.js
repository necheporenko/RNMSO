import fetch from 'isomorphic-unfetch';
import i18n from '../i18n';
import moment from 'moment';
import { apiUrl } from '../constants/settings';


export default async (url, language, options) => {
  const res = await fetch(`${apiUrl}${url}`, {
    headers: { 'Accept-Language': language || i18n.language || 'ru' },
    ...options
  });
  moment.locale('ru');

  const json = await res.json();
  return json;
}