export default cachedEventHandler((event) => {
  console.log('Headers:')
  console.log(event.node.req.headers) // prints '{}'
  console.log('Headers:')
  console.log(getHeaders(event)) // prints '{}'

  return {
    foo: 'bar'
  }
})
