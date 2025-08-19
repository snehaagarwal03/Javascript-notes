# ES6 Modules vs CommonJS

There are 2 ways for import and export: **ES6 Modules** and **CommonJS**. 

## Overview

**CommonJS** is mainly used in Node.js and **ES6 Modules** is used in modern JavaScript applications, especially in the browser.

## Export and Import Syntax

| Aspect | ES6 Modules | CommonJS |
|--------|-------------|-----------|
| **Export** | Uses `export` keyword | Uses `module.exports` |
| **Import** | Uses `import` keyword | Uses `require()` |
| **Default Export** | `export default` - import without curly braces | `module.exports` - import without curly braces |

## Key Differences

| Feature | ES6 Modules | CommonJS |
|---------|-------------|----------|
| **Resolution** | Static - resolved at compile time | Dynamic - resolved at runtime |
| **Loading** | Asynchronous loading | Synchronous - blocks execution until module is loaded |
| **Optimization** | Better tree-shaking and optimization | Limited optimization |
| **Performance** | Better performance in modern applications | Blocks code execution |
| **Environment** | Modern browsers and JavaScript environments | Node.js and older JavaScript applications |

## Support and Usage

ES6 Modules are the future of JavaScript modules, and they are widely supported in modern browsers and JavaScript environments. CommonJS is still widely used in Node.js and older JavaScript applications, but ES6 Modules are becoming the standard for new projects.

To use ES6 Modules, we need to ensure that our JavaScript environment supports them. Most modern browsers and JavaScript environments support ES6 Modules natively, but if we are using an older environment or need to support older browsers, we can use tools like Babel to transpile our code to ES5 syntax.

## Conclusion

ES6 Modules are the recommended way to handle modules in modern JavaScript