# TalkSphere

## 🏁 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/berkatceken1/talksphere-frontend.git
cd talksphere-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🧑 Chatbot Configuration

After setting up the project, you need to configure the chatbot script in `index.html`. Replace the following placeholder values:

```html
<script data-embed-id="your-embed-id" <!-- Replace with your unique embed id -->
  data-base-api-url="http://localhost:3001/api/embed"
  src="your-src">                      <!-- Replace with your script source URL -->
</script>
```

Required configurations:

- `data-embed-id`: Your unique embed ID for the chatbot
- `src`: The source URL for the chatbot script

Other customizable options:

- `data-assistant-name`: Chatbot name (default: "TalkSphere")
- `data-brand-image-url`: Custom brand image path
- `data-window-height`: Chat window height (default: "600px")
- `data-window-width`: Chat window width (default: "350px")
- `data-button-color`: Chat button color (default: "#0066FF")
- `data-assistant-bg-color`: Background color (default: "#e6f3ff")
- `data-greeting`: Welcome message

## 🧑‍💻 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 License

This project is licensed under the MIT License.
