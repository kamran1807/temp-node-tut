// variable 
  const amount = 9
  if (amount < 10) {
    console.log('small number')
  } else {
    console.log('large number')
  }
  console.log(`hey it's my first node app!`)


// globals 
  console.log(__dirname)
  // setInterval(() => {
  //   console.log('hello world')
  // }, 1000)


// modules 
  const names = require('./04-names')
  console.log(names)
  const sayHi = require('./05-utils')
  const data = require('./06-alternative-falvor')
  console.log(data)
  sayHi('susan')
  sayHi(names.john)
  sayHi(names.peter)
  require('./07-mind-grenade') // when you import a module you invoke it if it has a function 
  const os = require('os') // built-in module 
  const user = os.userInfo() // info about current user 
  console.log(user)
  const uptime = os.uptime() // system uptime in seconds 
  console.log(uptime)
  const currentOS = { // system info
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
  }
  console.log(currentOS)

// path 
  const path = require('path') 
  console.log(path.sep) // platform-specific file separator: '\' or '/'
  // join all arguments together and normalize the resulting path
  const filePath = path.join('/content', 'subfolder', 'test.txt') 
  console.log(filePath) // \content\subfolder\test.txt
  // basename (last portion of path)
  const baseName = path.basename(filePath) // test.txt
  console.log(baseName)
  // return absolute path 
  const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // C:\Users\You\Desktop\node tutorial\content\subfolder\test.txt
  console.log(absolutePath)

// filesystem 
  const { readFileSync, writeFileSync } = require('fs') // or 
  const fs = require('fs') // and then fs.read
  // read from file system & specify file format  
  const firstFile = readFileSync('./content/first.txt', 'utf8')
  const secondFile = readFileSync('./content/second.txt', 'utf8')
  console.log(firstFile, secondFile)
  // create new file 
  writeFileSync(
    './content/result-sync.txt', 
    `here is the result: ${firstFile}, ${secondFile}`
  )
  // here is the result: hello this is frist text file , hello this is second text file 
  // append to file (synchronous)
  writeFileSync(
    './content/result-sync.txt', 
    `here is the result: ${firstFile}, ${secondFile}`,
    {flag: 'a'} // append
  ) 
  // read file (asynchronous)
  const { readFile, writeFile } = require('fs')
  readFile('./content/first.txt', 'utf8', (err, result) => { // using callback 
    if (err) {
      console.log(err)
      return
    }
    console.log(result) // hello this is f text file
  }) 
  readFile('./content/first.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      const first = result
      readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        const second = result
        writeFile(
          './content/result-async.txt',
          `Here is the result : ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err)
              return
            }
            console.log('done with this task')
          }
        )
      })
    })
    console.log('starting next task')

// HTTP 

  // create server
  const http = require('http') 
  const server = http.createServer((req, res) => {  // req = incoming request, res = what we send back 
    if (req.url === '/') { // request url
      res.end('welcome to our come page')
    }
    else if (req.url === '/about') {
      res.end('here is about page')
    }
    else {
      res.end(`
        <h1>oops!</h1>
        <p>we can't seem to find the page you are lookin for</p>
        <a href="/">back home</a>
      `)
    }
  })
  // server.listen(5000)

// npm 
  const _ = require('lodash')
  const items = [
    1, 
    [2, [3, [4]]]
  ]
  const newItems = _.flattenDeep(items) // [ 1, 2, 3, 4 ]
  console.log(newItems)