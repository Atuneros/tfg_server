const router = require('express').Router()
const multer = require('multer')

const uploadFile = (file) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      file.originalname = uniqueSuffix+file.originalname
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

  return upload.single(file)
}

router.post('/test', uploadFile('image'), async (req, res, next) => {
  // const model = await tf.loadLayersModel(`http://localhost:3000/api/models/classify`)
  // console.log(req.file)
  // fs.readFile(`${__dirname}/uploads/${req.file.filename}`, function(err, data) {
  //   if (err) throw err // Fail if the file can't be read.
  //   console.log(data)
  //   const example = tf.browser.fromPixels(data)
  //   const prediction = model.predict(example)
  // })
  // let options = {
  //   mode: 'text',
  //   pythonOptions: ['-u'], // Get print results in real-time
  //     scriptPath: 'routes/predict',
  //   args: [`${req.file.buffer.toString("base64")}`] // An argument which can be accessed in the script using sys.argv[1]
  // }
 
  // PythonShell.run('predict.py', options, function (err, result){
  //   if (err) throw err
  //   // const buffer = Buffer.from(result[0], "base64")
  //   // console.log(buffer)
  //   // fs.writeFile(`${__dirname}/test.png`, buffer, 'base64', function(err) {
  //   //   res.sendFile(`${__dirname}/test.png`)
  //   // })
  //   res.sendFile(`${__dirname}/predictions/sys.png`)
  //   // res.send(200)
  // })
  res.sendStatus(200)
})

module.exports = router