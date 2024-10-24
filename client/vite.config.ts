import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import defaults from '../defaults.js'

// Define the port for the METIS server
// based on the default value.
let METIS_SERVER_PORT = defaults.PORT

// Resolve the path to the environment file.
let environmentFilePath = path.resolve(__dirname, '../environment.json')

// Check if the environment file exists.
if (fs.existsSync(environmentFilePath)) {
  try {
    // Read the environment file.
    let rawEnvData: string = fs.readFileSync(environmentFilePath, 'utf8')

    // Parse the environment file into a JSON object.
    let envData: Object = JSON.parse(rawEnvData)

    // Grab the port from the environment
    // data if it exists.
    if ('port' in envData && typeof envData['port'] === 'number') {
      METIS_SERVER_PORT = envData['port']
    }
  } catch (error) {
    console.error('Error parsing environment file.')
    console.error(error)
    process.exit(1)
  }
}

process.env.VITE_WS_URL = `ws://localhost:${METIS_SERVER_PORT}`

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${METIS_SERVER_PORT}`,
        changeOrigin: true,
      },
      '/socket.io': {
        target: `ws://localhost:${METIS_SERVER_PORT}`,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'metis/server': path.resolve(__dirname, '../server'),
      'metis/shared': path.resolve(__dirname, '../shared'),
    },
  },
})
