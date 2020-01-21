const OPERATION_MAP = {
  yard: {
    f: 3,
    inch: 36,
    yard: 1,
  },
  inch: {
    yard: 1 / 36,
    f: 1 / 12,
    inch: 1,
  },
  f: {
    yard: 1 / 3,
    inch: 12,
    f: 1,
  },
}
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

  parseTo(targetUnit) {
    const { unit } = this

    const operation = OPERATION_MAP[unit][targetUnit]
    let result = new Length(this.value * operation, targetUnit)

    return result
  }
}
