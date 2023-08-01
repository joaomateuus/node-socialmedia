export function mountMediaUrl(mediaType: string, filename: string){
    return `http://${process.env.HOST}:${process.env.PORT}/uploads/${mediaType == 'IMAGE' ? 'images' : 'videos'}/${filename}`
}