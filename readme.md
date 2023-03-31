# React-Express-template

A template repository for building web applications with a React frontend and Express backend. The frontend and backend communicate via an API JSON.
Stack

    -React
    -Express
    -API JSON
    -Vite (with CORS proxy)

  ### Getting Started

   [Click here to copy the template](https://github.com/JeremyEffinger/React-Express-template/generate)

### Then git clone:

```bash
git clone https://github.com/yourusername/your-project-name.git
```
  ### Install dependencies

```bash
cd your-project-name
```

```bash
yarn
```
### Starting the development server

```bash
yarn run dev
```

This runs the frontend on port 5173 and the backend on port 6000, using vite's proxy to prevent CORS issues. Any requests to /api/v1 will be routed through the proxy.

  ### API Endpoints

The API endpoints are defined in the server.js file.
Configuration

You can change the vite proxy in the vite.config.js file.
Deployment

To build and deploy the application, run

```bash
yarn run build
```

This will create a dist folder with the production-ready code for both the frontend and backend. You can then deploy this code to your preferred hosting service.

  ### Contributing

Feel free to open a pull request or issue for any enhancements or bug fixes.
License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
