import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  theme: {
    colors: {
      indigo: {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
      },
      cyan: {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
      },
      green: {
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
      },
      red: {
        500: '#f44336',
      },
      orange: {
        500: '#ff9800',
      },
      purple: {
        500: '#9c27b0',
      },
      yellow: {
        500: '#ffeb3b',
      },
    },
    boxShadow: {
      'z-depth-1': '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
      'z-depth-2': '0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)',
      'z-depth-3': '0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
      'z-depth-4': '0 12px 15px 0 rgba(0,0,0,0.16), 0 17px 50px 0 rgba(0,0,0,0.19)',
      'z-depth-5': '0 16px 28px 0 rgba(0,0,0,0.22), 0 25px 55px 0 rgba(0,0,0,0.21)',
    },
    fontFamily: {
      earth: ['earth', 'sans-serif'],
    },
  },
  shortcuts: {
    'btn-outline-white': 'border-2 border-white text-white rounded px-6 py-2 hover:bg-white hover:text-gray-800 transition-colors duration-300',
    'btn-primary': 'bg-[#2F5696] border-[#2F5696] text-white rounded px-6 py-2',
    'btn-primary-outline': 'border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-gray-800',
    'rgba-black-light': 'bg-black/60',
    'rgba-black-strong': 'bg-black/70',
    'flex-center': 'flex justify-center items-center',
    'text-center': 'text-center',
    'section-py': 'py-16',
    'feature-title': 'font-bold text-lg mb-2',
    'grey-text': 'text-gray-500',
    'indigo-text': 'text-indigo-500',
    'cyan-text': 'text-cyan-500',
    'green-text': 'text-green-500',
    'orange-text': 'text-orange-500',
    'purple-text': 'text-purple-500',
    'red-text': 'text-red-500',
    'yellow-text': 'text-yellow-500',
    'wow-fadeIn': 'wow fadeIn animate-duration-1s',
    'circle-icon': 'w-50px h-50px bg-[#2F5696] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0',
  },
  rules: [
    ['font-earth', { 'font-family': 'earth, sans-serif' }],
    ['view', { 'min-height': '100vh' }],
  ],
});
