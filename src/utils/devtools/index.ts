let DevTools: any

// tslint:disable-next-line:prefer-conditional-expression
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    DevTools = () => false
} else {
    // tslint:disable-next-line:no-var-requires
    DevTools = require('./devtools').DevTools
}

export { DevTools }
