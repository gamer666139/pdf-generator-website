const categoryContent = {
    unhinged: {
        title: "🤪 UNHINGED PDF",
        items: [
            "Why did the chicken cross the road? It didn't, it was yeet'd across by a very angry gamer",
            "Cats are just tiny tigers that decided napping is their entire personality",
            "If you're reading this, congratulations, you just wasted 5 seconds of your life",
            "The mitochondria is the powerhouse of the cell, but have you considered it's actually an alien?",
            "I would tell you a UDP joke but you'd never get it",
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "This PDF is sponsored by chaos and confusion",
            "Reality is just a simulation, and this PDF is proof"
        ]
    },
    dumb: {
        title: "🤨 DUMB PDF",
        items: [
            "What do you call a bear with no teeth? A gummy bear!",
            "Why did the math book look sad? Because it had too many problems",
            "I'm reading a book on the history of glue - can't put it down!",
            "What do you call a sleeping bull? A dozer!",
            "Why don't scientists trust atoms? Because they make up everything!",
            "What's the best thing about Switzerland? I don't know, but their flag is a big plus",
            "I used to hate facial hair, but then it grew on me",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ]
    },
    questionable: {
        title: "❓ QUESTIONABLE PDF",
        items: [
            "If a tree falls in the forest and nobody is around, does it make a sound? Or does it just vibe?",
            "What if birds aren't real and they're actually just government drones?",
            "Why do we call it 'debugging' when the first computer bug was an actual moth?",
            "Is water wet, or does it make things wet?",
            "What if we're all living in a simulation and this PDF is a glitch?",
            "Why do they call it a 'building' if it's already built?",
            "Do you think Pigeons remember their past lives?",
            "What if the Earth is flat and we've been lied to all along?"
        ]
    },
    normal: {
        title: "📄 NORMAL PDF",
        items: [
            "This is a professionally generated PDF document",
            "It contains normal, everyday content that you would expect",
            "The weather today is quite pleasant",
            "I enjoy a good cup of coffee in the morning",
            "Working from home has its advantages and disadvantages",
            "Regular exercise is important for maintaining good health",
            "Reading books is a great way to expand your knowledge",
            "Thank you for using this PDF generator service"
        ]
    },
    others: {
        title: "🎲 RANDOM MIXED PDF",
        items: [
            "Did you know? Honey never expires and can last thousands of years",
            "Bananas are berries, but strawberries aren't technically berries",
            "The Great Wall of China is not visible from space with the naked eye",
            "Octopuses have three hearts and blue blood",
            "Why did the coffee file a police report? It got mugged!",
            "Did you know that penguins have knees? They do!",
            "This is a mix of everything, completely random",
            "If you're reading this, the PDF generator is working!"
        ]
    }
};

function generatePDF(category) {
    const content = categoryContent[category];
    
    // Create HTML content for PDF
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 40px;
                    background-color: #f9f9f9;
                }
                .header {
                    text-align: center;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 30px;
                    color: #333;
                }
                .timestamp {
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                    margin-bottom: 20px;
                }
                .content-item {
                    margin-bottom: 15px;
                    padding: 10px;
                    border-left: 4px solid #667eea;
                    background-color: #f0f0f0;
                    line-height: 1.6;
                    page-break-inside: avoid;
                }
                .footer {
                    margin-top: 40px;
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                    border-top: 1px solid #ddd;
                    padding-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">${content.title}</div>
            <div class="timestamp">Generated on ${new Date().toLocaleString()}</div>
            ${content.items.map(item => `<div class="content-item">${item}</div>`).join('')}
            <div class="footer">Made with ❤️ by PDF Generator | Category: ${category.toUpperCase()}</div>
        </body>
        </html>
    `;
    
    // Create a temporary container
    const element = document.createElement('div');
    element.innerHTML = htmlContent;
    
    // PDF options
    const opt = {
        margin: 10,
        filename: `${category}-pdf-${Date.now()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Generate PDF
    html2pdf().set(opt).from(element.innerHTML).save();
    
    // Show notification
    showNotification(`${category.charAt(0).toUpperCase() + category.slice(1)} PDF generated successfully!`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
        z-index: 1000;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}