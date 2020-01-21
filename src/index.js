const YARD = 'yard'
const FOOT = 'f'
const INCH = 'inch'

export class Length {
  value
  unit

  constructor(val, unit) {
    this.value = val
    this.unit = unit
  }

  getVal() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  _parsedFromYard(targetUnit) {
    if (targetUnit === FOOT) {
      return new Length(this.value * 3, targetUnit)
    }
    if (targetUnit === INCH) {
      return new Length(this.value * 36, targetUnit)
    }
  }

  _parsedFromInch(targetUnit) {
    if (targetUnit === YARD) {
      return new Length(this.value / 36, targetUnit)
    }
    if (targetUnit === FOOT) {
      return new Length(this.value / 12, targetUnit)
    }
  }

  _parsedFromFoot(targetUnit) {
    if (targetUnit === YARD) {
      return new Length(this.value / 3, targetUnit)
    }
    if (targetUnit === INCH) {
      return new Length(this.value * 12, targetUnit)
    }
  }

  parseTo(targetUnit) {
    const { unit } = this
    if (unit === targetUnit) return this

    let result
    switch (unit) {
      case YARD:
        result = this._parsedFromYard(targetUnit)
        break
      case INCH:
        result = this._parsedFromInch(targetUnit)
        break
      case FOOT:
        result = this._parsedFromFoot(targetUnit)
        break
      default:
        break
    }
    return result
  }
}
