import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode}) => {
    const env = loadEnv(mode, process.cwd());
    // now you can access config with process.env.{configName}
    return defineConfig({
        plugins: [vue()],
        server: {
            port: env.VITE_APP_PORT || 8080
        }
    })
}
