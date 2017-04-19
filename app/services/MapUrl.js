class MapUrl {

  constructor(options) {
    this.options = options
  }

  apple() {
    return `http://maps.apple.com/?daddr=${this.options.lat},${this.options.lon}`
  }

  android() {
    return `http://maps.google.com/maps?daddr=${this.options.lat},${this.options.lon}`
  }
}

export { MapUrl as default }
