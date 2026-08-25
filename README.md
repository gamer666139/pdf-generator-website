# PDF Generator Website

🎉 A fun and interactive website to generate PDF files in different categories!

## Features

- **5 Categories** to choose from:
  - 🤪 **Unhinged** - Completely wild and chaotic content
  - 🤨 **Dumb** - Hilariously silly and nonsensical jokes
  - ❓ **Questionable** - Weird and sus content
  - 📄 **Normal** - Professional and standard content
  - 🎲 **Others** - Random mixed content

- **Easy to Use** - Just click a button and generate a PDF
- **Beautiful UI** - Modern gradient design with smooth animations
- **Responsive** - Works on desktop, tablet, and mobile devices
- **Instant Download** - PDFs download automatically

## How to Use

1. Open `index.html` in your web browser
2. Choose a category by clicking on one of the cards
3. Click the "Generate PDF" button
4. The PDF will download automatically to your device

## Project Structure

```
pdf-generator-website/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # PDF generation logic
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript** - PDF generation
- **html2pdf.js** - Library for converting HTML to PDF

## Dependencies

The project uses `html2pdf.js` from CDN, so no installation required!

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

## Customization

You can easily add more content to the PDFs by editing the `categoryContent` object in `script.js`:

```javascript
const categoryContent = {
    yourCategory: {
        title: "Your Title",
        items: [
            "Content item 1",
            "Content item 2",
            // Add more items...
        ]
    }
};
```

## Features You Can Add

- [ ] Customize PDF content before generation
- [ ] Upload custom images to include in PDFs
- [ ] Add a text editor to write custom content
- [ ] Support for multiple languages
- [ ] PDF templates and themes
- [ ] Save favorite PDFs

## License

Made with ❤️ for fun!

## Contributing

Feel free to fork this repository and add your own categories or features!
