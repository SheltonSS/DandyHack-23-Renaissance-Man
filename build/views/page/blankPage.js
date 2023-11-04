"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blankPage = void 0;
const elements = __importStar(require("typed-html"));
const blankPage = (bodyInnerHtml, title) => {
    return (elements.createElement("html", { lang: "en" },
        elements.createElement("head", null,
            elements.createElement("meta", { charset: "UTF-8" }),
            elements.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            elements.createElement("title", null, title),
            elements.createElement("link", { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/img/favicon.png", rel: "icon" }),
            elements.createElement("link", { href: "assets/img/apple-touch-icon.png", rel: "apple-touch-icon" }),
            elements.createElement("link", { href: "assets/vendor/aos/aos.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/vendor/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/vendor/bootstrap-icons/bootstrap-icons.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/vendor/boxicons/css/boxicons.min.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/vendor/glightbox/css/glightbox.min.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/vendor/swiper/swiper-bundle.min.css", rel: "stylesheet" }),
            elements.createElement("link", { href: "assets/css/style.css", rel: "stylesheet" }),
            elements.createElement("script", { src: "https://unpkg.com/hyperscript.org@0.9.9" }),
            elements.createElement("script", { src: "https://unpkg.com/htmx.org@1.9.3", integrity: "sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua", crossorigin: "anonymous" }),
            elements.createElement("script", { src: "https://cdn.tailwindcss.com" })),
        elements.createElement("body", null, bodyInnerHtml)));
};
exports.blankPage = blankPage;
