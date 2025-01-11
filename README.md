# Tailwind CSS v3.0+ TextGlow Plugin

**Tailwind CSS TextGlow** is a simple yet powerful plugin that lets you add text glow effects to your Tailwind CSS v3.0+ projects. Customize blur sizes and glow colors to create vibrant and eye-catching designs.

## 🚀 Features
- Add glow effects to text elements effortlessly.
- Customize blur sizes (`glow-sm`, `glow-lg`, etc.).
- Use any Tailwind CSS color for the glow effect (`glow-blue-500`, `glow-red-300`, etc.).

---

## 🌟 Inspiration

This project is inspired by [ycs77/tailwindcss-glowing](https://github.com/ycs77/tailwindcss-glowing). Special thanks to its creator for the idea of adding glowing effects to Tailwind CSS.

---

## 📦 Installation

Install the plugin using npm or yarn:

```bash
npm i -D tailwindcss-textglow
# or yarn
yarn add -D tailwindcss-textglow
```

---

## 🔧 Usage

1. Add the plugin to your `tailwind.config.js`:

   ```javascript
   const textGlow = require('tailwindcss-textglow');

   module.exports = {
     plugins: [textGlow],
   };
   ```

2. Use the utilities in your HTML or components:

   ```html
   <h1 class="glow-lg glow-blue-500">
     Glowing Text Example
   </h1>
   ```

---

## ✨ Options

### Glow Sizes
Use the following utilities for controlling blur size:

| Class       | Blur Size  |
|-------------|------------|
| `glow-sm`   | 2px        |
| `glow`      | 4px (Default) |
| `glow-md`   | 6px        |
| `glow-lg`   | 10px       |
| `glow-xl`   | 15px       |
| `glow-2xl`  | 25px       |
| `glow-3xl`  | 35px       |

### Glow Colors
Apply any Tailwind color as the glow color:

- `glow-red-500`
- `glow-blue-400`
- `glow-green-300`
- Or any custom color from your Tailwind theme.

---

## 🌟 Example

```html
<div class="text-4xl font-bold glow-xl glow-purple-600">
  Glowing Text Example
</div>
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).

## 🌍 Connect

- **GitHub**: [My Profile](https://github.com/jaameypr)
- **Discord**: [@jaamey.pr]()

---

Enjoy crafting glowing text with **Tailwind CSS TextGlow Plugin**! ✨
