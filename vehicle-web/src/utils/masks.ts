export function normalizePrice(value: string | undefined) {
    if(!value) return ''
    return value
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".")
  }