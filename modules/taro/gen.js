#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const mkdirp = require('mkdirp-promise')
const ejs = require('ejs')

// 获取参数
const argv = process.argv

// 获取输入文件名
const files = argv.slice(2)

// 获取命令当前执行路径
const getCurrentPath = dir => path.join(process.cwd(), dir)

// 获取项目路径
const getPath = dir => path.join(__dirname, dir)

// 遍历文件
files.forEach(async (file, key) => {
    // 获取文件名和后缀
    const [name, ext = 'vue'] = file.substring(file.lastIndexOf('/') + 1).split('.')

    // 渲染与读取
    const js_content = await ejs.renderFile(getPath('./template/index.js'), { name }, { async: true })

    // 渲染与读取
    const scss_content = await ejs.renderFile(getPath('./template/index.scss'), { name }, { async: true })

    // 创建文件夹
	await mkdirp(getCurrentPath(name))

    // 新建 js 文件
    await fs.writeFile(getCurrentPath(`${name}/index.js`), js_content)

    // 新建 scss 文件
    await fs.writeFile(getCurrentPath(`${name}/index.scss`), scss_content)
})