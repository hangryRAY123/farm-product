import image_1 from '../assets/Rectangle-2-1.png';
import image_2 from '../assets/Rectangle-2.png';
import image_3 from '../assets/chese-3.jpg';
import image_4 from '../assets/chese-4.jpg';
import image_5 from '../assets/honey-5.jpg';

export const products = [
  {
    id: 0,
    name: 'Филе бедра цыпленка',
    description:
      'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
    price: 400,
    weight: 700,
    image: image_1,
    specifications: [
      {
        property: 'Масса',
        value: '0,7 кг. (595-805 г.).',
      },
      {
        property: 'Срок годности',
        value: '6 суток',
      },
      {
        property: 'Порода',
        value: 'Кобб 500ю',
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область',
      },
    ],
    structure: [
      {
        property: 'Энергетическая ценность',
        value: '135 ккал./565 кДж',
      },
      {
        property: 'Пищевая ценность',
        value:
          'белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.',
      },
    ],
  },
  {
    id: 1,
    name: 'Филе бедра гуся',
    description:
      'Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусие отличает сырокопченого гуся от других подобных продуктов.',
    price: 500,
    weight: 600,
    image: image_2,
    specifications: [
      {
        property: 'Масса',
        value: '0,6 кг. (495-705 г.).',
      },
      {
        property: 'Срок годности',
        value: '5 суток',
      },
      {
        property: 'Порода',
        value: 'Кобб 200ю',
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область',
      },
    ],
    structure: [
      {
        property: 'Энергетическая ценность',
        value: '335 ккалю./765 кДж',
      },
      {
        property: 'Пищевая ценность',
        value:
          'белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г.',
      },
    ],
  },
  {
    id: 2,
    name: 'Сыр "Амст" с пажитником',
    description:
      'Базовый полутвердый сыр. Благодаря семенам пажитника, сыр приобретает ореховое послевкусие, которое идеально сочетается со сливочными нотками. Выдержка 1 месяц.',
    price: 400,
    weight: 300,
    image: image_3,
    specifications: [
      {
        property: 'Масса',
        value: '0,3 кг.',
      },
      {
        property: 'Срок годности',
        value: '30 суток',
      },
      {
        property: 'Жирность',
        value: '45%',
      },
      {
        property: 'Условия хранения',
        value: 'от 0 до 10 °С.',
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область',
      },
    ],
    structure: [
      {
        property: 'Энергетическая ценность',
        value: ' 323 ккал. / 1407 кДж.',
      },
      {
        property: 'Пищевая ценность',
        value:
          'белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г.',
      },
    ],
  },
  {
    id: 3,
    name: 'Сыр "Камамбер"',
    description:
      'Мягкий сыр из пастеризованного коровьего молока с добавлением культур белой плесени.',
    price: 390,
    weight: 200,
    image: image_4,
    specifications: [
      {
        property: 'Масса',
        value: '0,2 кг.',
      },
      {
        property: 'Срок годности',
        value: '30 суток',
      },
      {
        property: 'Жирность',
        value: '50%',
      },
      {
        property: 'Условия хранения',
        value: 'от 5 до 8 °С.',
      },
      {
        property: 'Место происхождения',
        value: 'Сергиев Посад',
      },
    ],
    structure: [
      {
        property: 'Энергетическая ценность',
        value: ' 303 ккал. / 1407 кДж.',
      },
      {
        property: 'Пищевая ценность',
        value:
          'белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г.',
      },
    ],
  },
  {
    id: 4,
    name: 'Мед майский горный.',
    description:
      'Мед урожая 2021 года. Необычно нежный майский мед, собранный в субтропических рощах Северо-кавказского заповедника, раскрывается целой гаммой цитрусовых оттенков.',
    price: 590,
    weight: 200,
    image: image_5,
    specifications: [
      {
        property: 'Масса',
        value: '0,2 кг.',
      },
      {
        property: 'Срок годности',
        value: '24 месяца',
      },
      {
        property: 'Условия хранения',
        value: 'от 5 до 20 °С.',
      },
    ],
    structure: [
      {
        property: 'Энергетическая ценность',
        value: ' 303 ккал. / 1407 кДж.',
      },
      {
        property: 'Пищевая ценность',
        value:
          'белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г.',
      },
    ],
  },
];
