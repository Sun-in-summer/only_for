import { TimeSegment } from "../src/shared/interfaces/time-segment";


export function getSampleData (): TimeSegment[]  {
  return [
  {
    id: 1,
    title: "Технологии",
    startYear: 2015,
    endYear: 2022,
    events: [
      {
        id: 1,
        year: 2015,
        description:
          "Частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        id: 2,
        year: 2016,
        description:
          "Телескоп «Хаббл» обнаружил самую удаленную из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        id: 3,
        year: 2017,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
    ],
  },
  {
    id: 2,
    title: "Наука",
    startYear: 1995,
    endYear: 2004,
    events: [
      {
        id: 1,
        year: 1995,
        description: "Запуск космического телескопа Хаббл в космос",
      },
      { id: 2, year: 1997, description: "Клонирование овцы Долли" },
      { id: 3, year: 2000, description: "Завершение проекта «Геном человека»" },
      {
        id: 4,
        year: 2003,
        description: "Открытие темной материи во Вселенной",
      },
    ],
  },
  {
    id: 3,
    title: "Искусство",
    startYear: 1980,
    endYear: 1990,
    events: [
      { id: 1, year: 1981, description: "Премьера мюзикла «Кошки» в Лондоне" },
      { id: 2, year: 1985, description: "Открытие музея д'Орсе в Париже" },
      {
        id: 3,
        year: 1988,
        description: "Основание Музея современного искусства в Нью-Йорке",
      },
    ],
  },
  {
    id: 4,
    title: "История",
    startYear: 1941,
    endYear: 1945,
    events: [
      { id: 1, year: 1941, description: "Начало Великой Отечественной войны" },
      { id: 2, year: 1942, description: "Сталинградская битва" },
      { id: 3, year: 1944, description: "Открытие второго фронта в Нормандии" },
      { id: 4, year: 1945, description: "Окончание Второй мировой войны" },
    ],
  },
  {
    id: 5,
    title: "Спорт",
    startYear: 2008,
    endYear: 2016,
    events: [
      {  id: 1,year: 2008, description: "Летние Олимпийские игры в Пекине" },
      {  id: 2,year: 2012, description: "Летние Олимпийские игры в Лондоне" },
      {  id: 3,year: 2014, description: "Зимние Олимпийские игры в Сочи" },
      {  id: 4,year: 2016, description: "Летние Олимпийские игры в Рио-де-Жанейро" },
    ],
  },
  {
    id: 6,
    title: "Космос",
    startYear: 1961,
    endYear: 1975,
    events: [
      {  id: 1,
        year: 1961,
        description: "Первый полет человека в космос - Юрий Гагарин",
      },
      {  id: 2,year: 1965, description: "Первый выход человека в открытый космос" },
      {  id: 3,year: 1969, description: "Высадка на Луну - Аполлон 11" },
      {  id: 4,year: 1975, description: "Программа Союз-Аполлон" },
    ],
  },
];
} 