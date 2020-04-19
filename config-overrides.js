module.exports = function override (config, env) {
  console.log(config.output)
  //do stuff with the webpack config...
  return config
}
