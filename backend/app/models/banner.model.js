module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      bannerName: String,
      imageUrl: String,
      status: Number
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const Banner = mongoose.model("banner", schema)
  return Banner
}
