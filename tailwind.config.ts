import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}"], theme:{extend:{colors:{ink:"#07152f",blue:"#2f6bff",warm:"#ffb44a",mist:"#f4f7fc"},boxShadow:{card:"0 12px 32px rgba(20,37,70,.08)"}}}, plugins:[] } satisfies Config;
