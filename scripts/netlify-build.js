import { execSync } from 'node:child_process'

console.log('开始构建...')
execSync('nuxt build', { stdio: 'inherit' })
console.log('构建完成！')
