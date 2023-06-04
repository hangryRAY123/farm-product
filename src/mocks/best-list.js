import articleEat from '../assets/article-1.svg';
import articleGarbage from '../assets/article-2.svg';
import articleSprout from '../assets/article-3.svg';
import articleNoMeat from '../assets/article-4.svg';

export const bestList = [
  {
    id: 0,
    product: 'Фермерские продукты',
    title: 'Еда намного вкуснее',
    text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
    image: articleEat,
  },
  {
    id: 1,
    product: 'Магазинные продукты',
    title: 'Просроченные продукты',
    text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    image: articleGarbage,
  },
  {
    id: 2,
    product: 'Фермерские продукты',
    title: 'Натуральные продукты',
    text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    image: articleSprout,
  },
  {
    id: 3,
    product: 'Магазинные продукты',
    title: 'Некачественное мясо',
    text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    image: articleNoMeat,
  },
];
