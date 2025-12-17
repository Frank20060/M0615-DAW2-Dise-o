///Aqui pongo las variables que quiero personalizar
tailwind.config = {
  theme: {
    extend: {
      colors: {
        divider: "#DBE0EC",
        sticker: "#2683EB",
        headline: "#000000",
        p1: "#000000",
        p2: "#6C6C6C",
        p3: "#66640F",
        link: "#2683EB",
        buttonText: "#FFFFFF",
        bg1: "#FFFFFF",
        bg2: "#F6F8FB",
        bg3: "#A8D3FF", // para gradiente usamos backgroundImage
        bg4: "#FFF546",
        bg5: "#000000",
      },
      fontFamily: {
        radioCanada: ["'Radio Canada Big'", "sans-serif"],
        geistMono: ["'Geist Mono'", "monospace"],
        sourceSerif: ["'Source Serif Pro'", "serif"],
      },
      fontSize: {
        nav: ["18px", { lineHeight: "120%", letterSpacing: "0%" }],
        btn: ["14px", { lineHeight: "100%", letterSpacing: "0%" }],
        caption: ["14px", { lineHeight: "100%", letterSpacing: "0%" }],
        h1: ["80px", { lineHeight: "100%", letterSpacing: "-4%" }],
        h2: ["80px", { lineHeight: "100%", letterSpacing: "-5%" }],
        h3: ["56px", { lineHeight: "100%", letterSpacing: "-3%" }],
        h4: ["40px", { lineHeight: "100%", letterSpacing: "-3%" }],
        p1Medium: ["20px", { lineHeight: "100%", letterSpacing: "-2%" }],
        p1: ["20px", { lineHeight: "100%", letterSpacing: "-2%" }],
        p2: ["20px", { lineHeight: "120%", letterSpacing: "-4%" }],
        pArticle: ["20px", { lineHeight: "140%", letterSpacing: "-4%" }],
      },
      backgroundImage: {
        "bg3-gradient": "linear-gradient(to bottom, #A8D3FF, #FFF4DF)",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
