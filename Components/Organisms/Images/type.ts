import { Photo } from 'pexels'

type PhotoType = Photo & {
  isActive: boolean
}
export type ImagesType = {
  photos: PhotoType[]
}
