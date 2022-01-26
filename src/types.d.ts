export type AppType = {
    debug: boolean
    queue: MediaListType
    ui: {
        loadRandomMedia: HTMLFormElement | null
        mediaEmbed: HTMLElement | null
        queueStatus: HTMLElement | null
        mediaSelect: HTMLFormElement | null
    }
    main(): void
    loadMedia(selected: boolean = false): void
    getRandomMedia(): MediaItemType | null
    getEmbedCode(media: MediaItemType | undefined): string | null
}

export type MediaPlatformType = 'bandcamp' | 'soundcloud' | 'youtube'

export type MediaItemType = {
    platform: MediaPlatformType
    slug: string
    title: string
} | null

export type MediaListType = MediaItemType[]
