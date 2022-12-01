import {
  suggestionSources,
  formId,
  districts,
  joinedSummerCourseOptions,
} from "~/constants/googleForm";
import moment from "moment";

const getEditFormId = (url) => {
  if (!url) return;
  const match = url.match(/.*(edit2=.+)$/);
  if (match?.[1]) return match[1];
};

export const generateSubmitUrl = (
  name,
  BuddhaName,
  yob,
  gender,
  parentName,
  phone,
  zalo,
  cultivationPlace,
  address,
  district,
  joinedSummerCourse,
  suggestionSource,
  editUrl,
  note
) => {
  const _cultivationPlace = cultivationPlace || "Chưa tham gia";
  const isOther = !suggestionSources.includes(suggestionSource);
  const _suggestionSource = suggestionSource || "Để trống";
  const _district = districts.includes(district) ? district : "Khác";
  const _joinedSummerCourse = joinedSummerCourseOptions.includes(
    joinedSummerCourse
  )
    ? joinedSummerCourse
    : joinedSummerCourseOptions[1];
  const _parentName = parentName || "Để trống";
  const _address = address || "Để trống";
  const _phone = phone || "Để trống";
  const editId = getEditFormId(editUrl);
  return `https://docs.google.com/forms/d/e/${formId}/formResponse?usp=pp_url&entry.973559293=${name}&entry.318700009=${BuddhaName}&entry.701485093=${yob}&entry.1148112032=${gender}&entry.1342406655=${_parentName}&entry.2011958949=${_phone}&entry.371361139=${zalo}&entry.30752418=${_cultivationPlace}&entry.16611864=${_address}&entry.844947229=${_district}&entry.856255325=${_joinedSummerCourse}${
    isOther
      ? "&entry.677772826=__other_option__&entry.677772826.other_option_response="
      : "&entry.677772826="
  }${_suggestionSource}&entry.2145804438=${note}&${editId}&entry.180790212=${moment().format(
    "DD-MM-YYYY HH:mm"
  )}`;
};
