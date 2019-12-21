// eslint-disable-next-line no-undef
const format = (text, replacement) => text.replace(/%s/, replacement);
const formattedText = (text, language, replacement) => format(text[language], replacement);

const imageUrl = `https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/72872476_10158915645603976_3882622604195921920_o.jpg?_nc_cat=104&_nc_oc=AQlEv7Pi1FGaMt8MrJ-LOvhAxhzSUQjmYltjkX41EiPuTbeFCE6uyaXR57JaprJbZJs&_nc_ht=scontent.fybz1-1.fna&oh=0ee7e7fa625f752ce3d2e626ae75fcc8&oe=5E791FB4`;

const backTitle = {
  en: "Thank you, %s",
  es: "¡Gracias, %s!",
};

const backMessage1 = {
  en: `We feel deeply thankful for the opportunity to share time, ideas and experiences with you.`,
  es: `Nos sentimos profundamente agradecidos por la oportunidad de haber compartido tiempo, ideas y experiencias.`,
};

const backMessage2 = {
  en: `We would like to extend our best wishes in this holiday season, and lots of success and accomplishments for 2020.`,
  es: `Nuestros mejores deseos en estas fiestas decembrinas, y todo el éxito del mundo para 2020.`,
};

const frontTitle = {
  en: "Happy Holidays, %s!",
  es: "¡Felices fiestas, %s!",
};

const frontMessage = {
  en: "From the Plata-Reveles family 👨‍👩‍👧‍👧",
  es: "De la familia Plata-Reveles 👨‍👩‍👧‍👧",
};

export default {
  backMessage1,
  backMessage2,
  backTitle,
  formattedText,
  frontMessage,
  frontTitle,
  imageUrl,
};
