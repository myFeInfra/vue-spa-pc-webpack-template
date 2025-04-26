import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify()
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    'flex-left': 'flex justify-start items-center',
    'flex-right': 'flex justify-end items-center',
    'flex-between': 'flex justify-between items-center',
    'flex-around': 'flex justify-around items-center',
    'flex-col': 'flex flex-col',
    'flex-col-center': 'flex flex-col justify-center items-center',
    'flex-col-left': 'flex flex-col justify-start items-center',
    'flex-col-right': 'flex flex-col justify-end items-center',
    'flex-col-between': 'flex flex-col justify-between items-center',
    'flex-col-around': 'flex flex-col justify-around items-center',
    'flex-wrap': 'flex flex-wrap',
    'flex-wrap-center': 'flex flex-wrap justify-center items-center',
    'flex-wrap-left': 'flex flex-wrap justify-start items-center',
    'flex-wrap-right': 'flex flex-wrap justify-end items-center',
    'flex-wrap-between': 'flex flex-wrap justify-between items-center',
    'flex-wrap-around': 'flex flex-wrap justify-around items-center',
    'flex-wrap-col': 'flex flex-wrap flex-col',
    'flex-wrap-col-center': 'flex flex-wrap flex-col justify-center items-center',
    'flex-wrap-col-left': 'flex flex-wrap flex-col justify-start items-center',
    'flex-wrap-col-right': 'flex flex-wrap flex-col justify-end items-center',
    'flex-wrap-col-between': 'flex flex-wrap flex-col justify-between items-center',
    'flex-wrap-col-around': 'flex flex-wrap flex-col justify-around items-center',
  }
})
