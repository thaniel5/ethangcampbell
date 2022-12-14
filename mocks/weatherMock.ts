import { IWeatherAPI } from "@/types/weather";

const weatherMock: IWeatherAPI = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1669615200,
      main: {
        temp: 42.22,
        feels_like: 36.45,
        temp_min: 41.95,
        temp_max: 42.22,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 982,
        humidity: 78,
        temp_kf: 0.15,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 89 },
      wind: { speed: 9.86, deg: 309, gust: 18.48 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-28 06:00:00",
    },
    {
      dt: 1669626000,
      main: {
        temp: 41.77,
        feels_like: 37.38,
        temp_min: 41.49,
        temp_max: 41.77,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 983,
        humidity: 81,
        temp_kf: 0.16,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.8, deg: 309, gust: 12.19 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-28 09:00:00",
    },
    {
      dt: 1669636800,
      main: {
        temp: 40.8,
        feels_like: 37.62,
        temp_min: 40.8,
        temp_max: 40.8,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 984,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.74, deg: 322, gust: 8.37 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-28 12:00:00",
    },
    {
      dt: 1669647600,
      main: {
        temp: 42.3,
        feels_like: 42.3,
        temp_min: 42.3,
        temp_max: 42.3,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 987,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.73, deg: 327, gust: 2.48 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-28 15:00:00",
    },
    {
      dt: 1669658400,
      main: {
        temp: 46.8,
        feels_like: 45.1,
        temp_min: 46.8,
        temp_max: 46.8,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 986,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 82 },
      wind: { speed: 4.09, deg: 210, gust: 4.85 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-28 18:00:00",
    },
    {
      dt: 1669669200,
      main: {
        temp: 48.02,
        feels_like: 45.21,
        temp_min: 48.02,
        temp_max: 48.02,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 987,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 72 },
      wind: { speed: 6.17, deg: 207, gust: 7.63 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-28 21:00:00",
    },
    {
      dt: 1669680000,
      main: {
        temp: 43.56,
        feels_like: 39.78,
        temp_min: 43.56,
        temp_max: 43.56,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 987,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 65 },
      wind: { speed: 6.38, deg: 178, gust: 10.76 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-29 00:00:00",
    },
    {
      dt: 1669690800,
      main: {
        temp: 41.65,
        feels_like: 37.04,
        temp_min: 41.65,
        temp_max: 41.65,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 988,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 2 },
      wind: { speed: 7.14, deg: 177, gust: 17.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-29 03:00:00",
    },
    {
      dt: 1669701600,
      main: {
        temp: 41.11,
        feels_like: 36.66,
        temp_min: 41.11,
        temp_max: 41.11,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 988,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 21 },
      wind: { speed: 6.69, deg: 167, gust: 15.84 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-29 06:00:00",
    },
    {
      dt: 1669712400,
      main: {
        temp: 42.04,
        feels_like: 36.59,
        temp_min: 42.04,
        temp_max: 42.04,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 988,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.01, deg: 166, gust: 24.92 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-29 09:00:00",
    },
    {
      dt: 1669723200,
      main: {
        temp: 42.42,
        feels_like: 36.34,
        temp_min: 42.42,
        temp_max: 42.42,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 987,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.76, deg: 163, gust: 28.81 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-11-29 12:00:00",
    },
    {
      dt: 1669734000,
      main: {
        temp: 47.17,
        feels_like: 41.32,
        temp_min: 47.17,
        temp_max: 47.17,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 986,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 13.87, deg: 165, gust: 34.83 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-29 15:00:00",
    },
    {
      dt: 1669744800,
      main: {
        temp: 55.89,
        feels_like: 54.18,
        temp_min: 55.89,
        temp_max: 55.89,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 983,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 18.01, deg: 176, gust: 35.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-29 18:00:00",
    },
    {
      dt: 1669755600,
      main: {
        temp: 59.18,
        feels_like: 57.43,
        temp_min: 59.18,
        temp_max: 59.18,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 55 },
      wind: { speed: 19.53, deg: 177, gust: 35.88 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-29 21:00:00",
    },
    {
      dt: 1669766400,
      main: {
        temp: 56.14,
        feels_like: 54.79,
        temp_min: 56.14,
        temp_max: 56.14,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 979,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 61 },
      wind: { speed: 21.07, deg: 184, gust: 42.32 },
      visibility: 10000,
      pop: 0.2,
      rain: { "3h": 0.3 },
      sys: { pod: "n" },
      dt_txt: "2022-11-30 00:00:00",
    },
    {
      dt: 1669777200,
      main: {
        temp: 55.49,
        feels_like: 54.97,
        temp_min: 55.49,
        temp_max: 55.49,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 978,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 18.88, deg: 184, gust: 39.53 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.02 },
      sys: { pod: "n" },
      dt_txt: "2022-11-30 03:00:00",
    },
    {
      dt: 1669788000,
      main: {
        temp: 56.52,
        feels_like: 56.25,
        temp_min: 56.52,
        temp_max: 56.52,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 977,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 99 },
      wind: { speed: 15.7, deg: 206, gust: 33.38 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.53 },
      sys: { pod: "n" },
      dt_txt: "2022-11-30 06:00:00",
    },
    {
      dt: 1669798800,
      main: {
        temp: 53.42,
        feels_like: 52.18,
        temp_min: 53.42,
        temp_max: 53.42,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 977,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 77 },
      wind: { speed: 15.66, deg: 267, gust: 27.38 },
      visibility: 10000,
      pop: 0.99,
      rain: { "3h": 1.89 },
      sys: { pod: "n" },
      dt_txt: "2022-11-30 09:00:00",
    },
    {
      dt: 1669809600,
      main: {
        temp: 39.15,
        feels_like: 29.91,
        temp_min: 39.15,
        temp_max: 39.15,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 981,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 69 },
      wind: { speed: 17.83, deg: 284, gust: 28.3 },
      visibility: 10000,
      pop: 0.77,
      sys: { pod: "n" },
      dt_txt: "2022-11-30 12:00:00",
    },
    {
      dt: 1669820400,
      main: {
        temp: 32.16,
        feels_like: 20.1,
        temp_min: 32.16,
        temp_max: 32.16,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 986,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 20.36, deg: 289, gust: 32.44 },
      visibility: 10000,
      pop: 0.44,
      snow: { "3h": 0.21 },
      sys: { pod: "d" },
      dt_txt: "2022-11-30 15:00:00",
    },
    {
      dt: 1669831200,
      main: {
        temp: 33.85,
        feels_like: 21.94,
        temp_min: 33.85,
        temp_max: 33.85,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 990,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 66 },
      wind: { speed: 21.79, deg: 283, gust: 31.79 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-30 18:00:00",
    },
    {
      dt: 1669842000,
      main: {
        temp: 33.4,
        feels_like: 22.95,
        temp_min: 33.4,
        temp_max: 33.4,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 993,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 6 },
      wind: { speed: 16.31, deg: 282, gust: 26.37 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-11-30 21:00:00",
    },
    {
      dt: 1669852800,
      main: {
        temp: 30.02,
        feels_like: 19.42,
        temp_min: 30.02,
        temp_max: 30.02,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 996,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 3 },
      wind: { speed: 14.05, deg: 275, gust: 26.53 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-01 00:00:00",
    },
    {
      dt: 1669863600,
      main: {
        temp: 28.22,
        feels_like: 17.22,
        temp_min: 28.22,
        temp_max: 28.22,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 997,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 13.8, deg: 274, gust: 29.28 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-01 03:00:00",
    },
    {
      dt: 1669874400,
      main: {
        temp: 26.49,
        feels_like: 15.53,
        temp_min: 26.49,
        temp_max: 26.49,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 999,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 12.71, deg: 278, gust: 27.11 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-01 06:00:00",
    },
    {
      dt: 1669885200,
      main: {
        temp: 24.62,
        feels_like: 13.91,
        temp_min: 24.62,
        temp_max: 24.62,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1001,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 11.21, deg: 284, gust: 24.92 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-01 09:00:00",
    },
    {
      dt: 1669896000,
      main: {
        temp: 22.91,
        feels_like: 13.08,
        temp_min: 22.91,
        temp_max: 22.91,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 1003,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 9.01, deg: 285, gust: 20.8 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-01 12:00:00",
    },
    {
      dt: 1669906800,
      main: {
        temp: 26.96,
        feels_like: 18.54,
        temp_min: 26.96,
        temp_max: 26.96,
        pressure: 1035,
        sea_level: 1035,
        grnd_level: 1005,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 0 },
      wind: { speed: 8.25, deg: 289, gust: 13.06 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-01 15:00:00",
    },
    {
      dt: 1669917600,
      main: {
        temp: 34.83,
        feels_like: 29.73,
        temp_min: 34.83,
        temp_max: 34.83,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 1004,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 9 },
      wind: { speed: 5.82, deg: 278, gust: 7.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-01 18:00:00",
    },
    {
      dt: 1669928400,
      main: {
        temp: 36.12,
        feels_like: 36.12,
        temp_min: 36.12,
        temp_max: 36.12,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1003,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 2.17, deg: 231, gust: 2.98 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-01 21:00:00",
    },
    {
      dt: 1669939200,
      main: {
        temp: 32.27,
        feels_like: 27.16,
        temp_min: 32.27,
        temp_max: 32.27,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 1003,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 96 },
      wind: { speed: 5.26, deg: 162, gust: 7.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-02 00:00:00",
    },
    {
      dt: 1669950000,
      main: {
        temp: 32.5,
        feels_like: 26.28,
        temp_min: 32.5,
        temp_max: 32.5,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1001,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.76, deg: 167, gust: 14.09 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-02 03:00:00",
    },
    {
      dt: 1669960800,
      main: {
        temp: 30.67,
        feels_like: 23.88,
        temp_min: 30.67,
        temp_max: 30.67,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1000,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 98 },
      wind: { speed: 7.02, deg: 157, gust: 15.32 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-02 06:00:00",
    },
    {
      dt: 1669971600,
      main: {
        temp: 30.56,
        feels_like: 22.41,
        temp_min: 30.56,
        temp_max: 30.56,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 998,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 57 },
      wind: { speed: 9.15, deg: 168, gust: 24.2 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-02 09:00:00",
    },
    {
      dt: 1669982400,
      main: {
        temp: 31.53,
        feels_like: 23.45,
        temp_min: 31.53,
        temp_max: 31.53,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 997,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 55 },
      wind: { speed: 9.42, deg: 173, gust: 25.23 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-02 12:00:00",
    },
    {
      dt: 1669993200,
      main: {
        temp: 36.7,
        feels_like: 28.6,
        temp_min: 36.7,
        temp_max: 36.7,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 995,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 71 },
      wind: { speed: 12.26, deg: 175, gust: 32.82 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-02 15:00:00",
    },
    {
      dt: 1670004000,
      main: {
        temp: 44.94,
        feels_like: 37.92,
        temp_min: 44.94,
        temp_max: 44.94,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 992,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 85 },
      wind: { speed: 15.93, deg: 188, gust: 40.87 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-02 18:00:00",
    },
    {
      dt: 1670014800,
      main: {
        temp: 46.04,
        feels_like: 38.82,
        temp_min: 46.04,
        temp_max: 46.04,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 989,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 18.1, deg: 187, gust: 40.98 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-02 21:00:00",
    },
    {
      dt: 1670025600,
      main: {
        temp: 49.01,
        feels_like: 42.35,
        temp_min: 49.01,
        temp_max: 49.01,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 988,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 19.71, deg: 197, gust: 43.55 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-03 00:00:00",
    },
    {
      dt: 1670036400,
      main: {
        temp: 50.79,
        feels_like: 48.16,
        temp_min: 50.79,
        temp_max: 50.79,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 988,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 20.09, deg: 205, gust: 44.2 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-12-03 03:00:00",
    },
  ],
  city: {
    id: 0,
    name: "Carmel",
    coord: { lat: 39.9744, lon: -86.0829 },
    country: "US",
    population: 0,
    timezone: -18000,
    sunrise: 1669552981,
    sunset: 1669587681,
  },
};

export default weatherMock;
