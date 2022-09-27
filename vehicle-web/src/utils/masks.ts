export const normalizePlate = (value: any | undefined) => {
    if(!value) return ''

    return value
        .replace(/[A-Z]{3}[-][0-9]{4}/g, '$1-$2')
} 