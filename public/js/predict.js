export async function predict(){
  const model = await tf.loadLayersModel(`http://localhost:30200/api/models/classify`)
  const img = document.getElementById("img")
  const example = tf.expandDims(tf.browser.fromPixels(img).resizeBilinear([224,224]),0)
  let prediction = model.predict(example)
  prediction = prediction.squeeze()
  // lo del round funciona porque solo hay 2 clases, si hay mas .argmax o explota
  prediction = prediction.round()

  const canvas = document.getElementById('destination')
  // canvas.width = prediction.shape.width
  // canvas.height = prediction.shape.height
  await tf.browser.toPixels(prediction, canvas)
  // document.body.appendChild(canvas)
  
  console.log(prediction)
}