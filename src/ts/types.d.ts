interface AppInterface {
    debug: boolean
    queue: MediaListType
    init(): void
    getRandomMedia(): MediaItemType
}

type MediaListType = MediaItemType[]

type MediaItemType = {
    platform: MediaPlatformType
    slug: string
    title: string
} | null

type MediaPlatformType = 'bandcamp' | 'soundcloud' | 'youtube'
