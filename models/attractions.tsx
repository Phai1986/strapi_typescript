export interface Data {
    data: Daum[]
}
export interface Daum {
    id: number
    attributes: Attributes
}
export interface Attributes {
    name: string
    detail: string
    latitude: string
    longitude: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    coverimage: string
}