'use strict'


/*
title:
    media title as written on the source page.

platform:
    bandcamp = bc
    soundcloud = sc
    youtube = yt

slug:
    id/path/whatever we need for the embed url.
    bandcamp: https://bandcamp.com/EmbeddedPlayer/track=MEDIA_SLUG
    soundcloud: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/MEDIA_SLUG
    youtube: https://www.youtube.com/embed/MEDIA_SLUG
*/

APP.data = [
    { title: `- DNS - 5lack ⚡︎ Beat by Fumitake Tamura`, platform: 'yt', slug: 'L1iL9oAKN9E' },
    { title: `90's Underground Hip Hop - Rare Tracks`, platform: 'yt', slug: 'rBLuvEwIF5E' },
    { title: `A-Trak - DJs Gotta Dance More ft. Todd Terry (Official Music Video)`, platform: 'yt', slug: 's5GPuBjOEcA' },
    { title: `AINT NO LOVE produced by Penguin Prison`, platform: 'bc', slug: '3707273849', },
    { title: `Atari Teenage Riot - Revolution Action`, platform: 'yt', slug: 'ZkivTBAMuaE' },
    { title: `Blumentopf - Irgendwie Lieb' ich das 2`, platform: 'yt', slug: 'TDE0EatumPg' },
    { title: `Boddhi Musique - For the Love of Soulful`, platform: 'yt', slug: 'ngFJlz6jJ3o' },
    { title: `Boom Baptist-King of My Castle`, platform: 'yt', slug: 'a5EGd5u6FFw' },
    { title: `Busta Rhymes - Gimme Some More (Official Video) [Explicit]`, platform: 'yt', slug: 'un3NkWnHl9Q' },
    { title: `Childhood - Love Saw It`, platform: 'bc', slug: '1925673495', },
    { title: `CRAM - Summer Session ( feat.仙人掌 ) | Takuya Wakiyama`, platform: 'yt', slug: 'NekFeMNqvIE' },
    { title: `Demuja - Move`, platform: 'yt', slug: '8F9n5-9Cxuw' },
    { title: `Disclosure - Ultimatum (Audio) ft. Fatoumata Diawara`, platform: 'yt', slug: 'F-TYRhBHbwc' },
    { title: `dj honda feat. KOJOE / I Need More`, platform: 'yt', slug: '0aCRlou3unQ' },
    { title: `DJ Shadow - Urgent, Important, Please Read (feat. Rockwell Knuckles, Tef Poe, Daemon) [HQ Audio]`, platform: 'yt', slug: 'l8OE8kg7DoQ' },
    { title: `Elvis Presley - A Little Less Conversation (Original Studio Version)`, platform: 'yt', slug: 'sNUSBi8x4tg' },
    { title: `Extra produktionen - The mothership`, platform: 'yt', slug: 'nZ5kwd3-Tr0' },
    { title: `Gabriel Garzón-Montano - 'Everything Is Everything' (Official Video)`, platform: 'yt', slug: 'Z2WH42MLgUE' },
    { title: `Gabriel Garzón-Montano - Golden Wings [Official Video]`, platform: 'yt', slug: 'l4LFawdddFE' },
    { title: `Get Lucky - Daft Punk // Saxophone Solo`, platform: 'yt', slug: '3FwQzeG7hoM' },
    { title: `Gift of Gab - The Ride of your Life`, platform: 'yt', slug: 'RFE66SEwo7Y' },
    { title: `Hanna - Sometimes (Karol XVII & MB Valence Remix)`, platform: 'yt', slug: 'INxh_eCFEpo' },
    { title: `Hip Hop 1995 I`, platform: 'yt', slug: 'S66-QsQJg8I' },
    { title: `Jamal - Keep It Real (Official Video) [Explicit]`, platform: 'yt', slug: '_gmmvFBGkjc' },
    { title: `Johannes Heil - Die Zahl des Tieres (A1)`, platform: 'yt', slug: 'F1O8tBPZecA' },
    { title: `JUMA - Show me feat. USOWA`, platform: 'yt', slug: 'kYk7G-_wqzQ' },
    { title: `Kobacchi Ryo - Bilal (ft.HAL-D)`, platform: 'yt', slug: 'ulTuqFamxPQ' },
    { title: `KRS-One - DON'T FALL FOR IT (Official Music Video)`, platform: 'yt', slug: 'efMiGjf_bic' },
    { title: `Kruder & Dorfmeister - Trans Fatty Acid`, platform: 'yt', slug: 'sYnrtGCgsM8' },
    { title: `L'indécis - Soulful (Chillhop Live Session)`, platform: 'yt', slug: '-NxV_nqD1N0' },
    { title: `Legend Of 1900 Piano Dual "Enduring Movement"`, platform: 'yt', slug: 'ETZJo4TcbQk' },
    { title: `LoFi House Mix 1988 | The Stoner House Edition by @Katarakt`, platform: 'yt', slug: 'mlUMgZGFCtw' },
    { title: `LSB - Overthinking (Ft. Sian Sanderson) (Official Video)`, platform: 'yt', slug: '-4Cm90l5egE' },
    { title: `Massive Töne - Das und Dies (Remix)`, platform: 'yt', slug: 'rQtChq8GARw' },
    { title: `Michael Jackson - Don’t Stop 'Til You Get Enough (Official Video)`, platform: 'yt', slug: 'yURRmWtbTbo' },
    { title: `Michael Jackson - Leave Me Alone (Official Video)`, platform: 'yt', slug: 'crbFmpezO4A' },
    { title: `Modjo - Lady (Hear Me Tonight) (Radio Edit) (HQ)`, platform: 'yt', slug: 'vRB1MLGEHSc' },
    { title: `Newen Afrobeat feat. Seun Kuti & Cheick Tidiane Seck - Opposite People (Fela Kuti)`, platform: 'yt', slug: 'mFSRCG4DrmI' },
    { title: `Niah - "Bets"`, platform: 'yt', slug: 'Qfdh-1AplSk' },
    { title: `Outkast - Ms. Jackson (Official HD Video)`, platform: 'yt', slug: 'MYxAiK6VnXw' },
    { title: `Pharoahe Monch - F*** You`, platform: 'yt', slug: '4FqbkKh8mro' },
    { title: `Robert Glasper - So Beautiful (Live At Capitol Studios) (Official Video)`, platform: 'yt', slug: 'GS2Y_CkaXP0' },
    { title: `Roger Sanchez - Another Chance (Directors Cut)`, platform: 'yt', slug: 'rdlvPe959Ck' },
    { title: `RYUZO - THE STORY`, platform: 'yt', slug: '8A2f6fYbcu0' },
    { title: `Shia LaBeouf 'Just Do It' Motivational Speech (Original Video by LaBeouf, Rönkkö & Turner)`, platform: 'yt', slug: 'ZXsQAXx_ao0' },
    { title: `SPARTALIEN & Esblendet - Rainbows & Unicorns`, platform: 'bc', slug: '2223839995', },
    { title: `The Horrorist - One Night In New York City (Uncensored)`, platform: 'yt', slug: 'oVgjC5Gw8y0' },
    { title: `The Smashing Pumpkins - 1979 (Official Music Video)`, platform: 'yt', slug: '4aeETEoNfOg' },
    { title: `Torch - Kapitel 29`, platform: 'yt', slug: 'Utu1dvtvqfw' },
    { title: `Torch - Morgen`, platform: 'yt', slug: 'xStjy860kl8' },
    { title: `U_Know (Olive Oil x Miles Word) / In A Row`, platform: 'yt', slug: 'Z8utqVZ5J7I' },
    { title: `Ugly Heroes - Today Right Now`, platform: 'bc', slug: '2939601556', },
    { title: `Verbz & Mr Slipz - For My Peeps (OFFICIAL VIDEO)`, platform: 'yt', slug: 'nzy7JHyr4B8' },
    { title: `Vy Pole - V`, platform: 'yt', slug: 'rzCCahBMwrk' },
    { title: `Wamdue Project - King of My Castle (Official HD Video)`, platform: 'yt', slug: 'DXSyQjppqG0' },
    { title: `Womack & Womack - Teardrops (Official Video)`, platform: 'yt', slug: 'R8AOAap6_k4' },
    { title: `【MV】Draw4 / Kanjou mid night (Track by Missy)`, platform: 'yt', slug: 'tsmROPY_zF0' },
]
