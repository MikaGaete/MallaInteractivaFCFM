/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

export default {
    mode: 'jit',
    content: [
        "./src/safelist.txt",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    safelist: [
        'bg-[#A0C4FF]',
        'bg-[#ffadad]',
        'bg-[#9BF6FF]',
        'bg-[#FFC6FF]',
        'bg-[#FDFFB6]',
        'bg-[#FFD6A5]',
        'bg-[#CAFFBF]',
        'bg-[#BDB2FF]',
        'bg-[#F46592]',
        'bg-[#6EEB83]'
    ],
    darkMode: "class",
    plugins: [nextui()],
}

