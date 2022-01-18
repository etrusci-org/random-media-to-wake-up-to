/*
title:
    media title as written on the source page.

platform:
    bandcamp = bc
    soundcloud = sc
    youtube = yt

slug:
    id/path/whatever we need for the embed url.
    bandcamp: https://bandcamp.com/EmbeddedPlayer/track=[SLUG_HERE]
    soundcloud: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/[SLUG_HERE]
    youtube: https://www.youtube.com/embed/[SLUG_HERE]
*/
'use strict'


APP.data = [
    { platform: 'bc', slug: '1925673495',  title: `Childhood - Love Saw It` },
    { platform: 'bc', slug: '2939601556',  title: `Ugly Heroes - Today Right Now` },
    { platform: 'bc', slug: '3707273849',  title: `AINT NO LOVE produced by Penguin Prison` },
    { platform: 'sc', slug: '922777060',   title: `SPARTALIEN & Esblendet - Rainbows & Unicorns`},
    { platform: 'yt', slug: '_gmmvFBGkjc', title: `Jamal - Keep It Real (Official Video) [Explicit]` },
    { platform: 'yt', slug: '-4Cm90l5egE', title: `LSB - Overthinking (Ft. Sian Sanderson) (Official Video)` },
    { platform: 'yt', slug: '-NxV_nqD1N0', title: `L'indécis - Soulful (Chillhop Live Session)` },
    { platform: 'yt', slug: '0aCRlou3unQ', title: `dj honda feat. KOJOE / I Need More` },
    { platform: 'yt', slug: '1wMPQ99nBwQ', title: `Eminem - It’s OK feat. Eye-Kyu [With Lyrics] (1996)` },
    { platform: 'yt', slug: '3FwQzeG7hoM', title: `Get Lucky - Daft Punk // Saxophone Solo` },
    { platform: 'yt', slug: '4aeETEoNfOg', title: `The Smashing Pumpkins - 1979 (Official Music Video)` },
    { platform: 'yt', slug: '4FqbkKh8mro', title: `Pharoahe Monch - F*** You` },
    { platform: 'yt', slug: '8A2f6fYbcu0', title: `RYUZO - THE STORY` },
    { platform: 'yt', slug: '8F9n5-9Cxuw', title: `Demuja - Move` },
    { platform: 'yt', slug: 'a5EGd5u6FFw', title: `Boom Baptist-King of My Castle` },
    { platform: 'yt', slug: 'BNVg9nO2R0o', title: `DJ Bailey - Intelligent Drum & Bass (1996) - High Quality` },
    { platform: 'yt', slug: 'crbFmpezO4A', title: `Michael Jackson - Leave Me Alone (Official Video)` },
    { platform: 'yt', slug: 'dkrpqUyiZgA', title: `FULL VINYL | 90's Hiphop Set | ATTAME` },
    { platform: 'yt', slug: 'DXSyQjppqG0', title: `Wamdue Project - King of My Castle (Official HD Video)` },
    { platform: 'yt', slug: 'E7g1qKP4F3Y', title: `Dan-e-o - Dear Hip Hop` },
    { platform: 'yt', slug: 'efMiGjf_bic', title: `KRS-One - DON'T FALL FOR IT (Official Music Video)` },
    { platform: 'yt', slug: 'ETZJo4TcbQk', title: `Legend Of 1900 Piano Dual "Enduring Movement"` },
    { platform: 'yt', slug: 'F-TYRhBHbwc', title: `Disclosure - Ultimatum (Audio) ft. Fatoumata Diawara` },
    { platform: 'yt', slug: 'F1O8tBPZecA', title: `Johannes Heil - Die Zahl des Tieres (A1)` },
    { platform: 'yt', slug: 'GS2Y_CkaXP0', title: `Robert Glasper - So Beautiful (Live At Capitol Studios) (Official Video)` },
    { platform: 'yt', slug: 'INxh_eCFEpo', title: `Hanna - Sometimes (Karol XVII & MB Valence Remix)` },
    { platform: 'yt', slug: 'kYk7G-_wqzQ', title: `JUMA - Show me feat. USOWA` },
    { platform: 'yt', slug: 'L1iL9oAKN9E', title: `- DNS - 5lack ⚡︎ Beat by Fumitake Tamura` },
    { platform: 'yt', slug: 'l4LFawdddFE', title: `Gabriel Garzón-Montano - Golden Wings [Official Video]` },
    { platform: 'yt', slug: 'l8OE8kg7DoQ', title: `DJ Shadow - Urgent, Important, Please Read (feat. Rockwell Knuckles, Tef Poe, Daemon) [HQ Audio]` },
    { platform: 'yt', slug: 'mFSRCG4DrmI', title: `Newen Afrobeat feat. Seun Kuti & Cheick Tidiane Seck - Opposite People (Fela Kuti)` },
    { platform: 'yt', slug: 'MJkbQLVeFPs', title: `King Gizzard & The Lizard Wizard - Black Hot Soup (DJ Shadow “My Own Reality” Re-Write)` },
    { platform: 'yt', slug: 'mlUMgZGFCtw', title: `LoFi House Mix 1988 | The Stoner House Edition by @Katarakt` },
    { platform: 'yt', slug: 'MYxAiK6VnXw', title: `Outkast - Ms. Jackson (Official HD Video)` },
    { platform: 'yt', slug: 'NekFeMNqvIE', title: `CRAM - Summer Session ( feat.仙人掌 ) | Takuya Wakiyama` },
    { platform: 'yt', slug: 'ngFJlz6jJ3o', title: `Boddhi Musique - For the Love of Soulful` },
    { platform: 'yt', slug: 'nZ5kwd3-Tr0', title: `Extra produktionen - The mothership` },
    { platform: 'yt', slug: 'nzy7JHyr4B8', title: `Verbz & Mr Slipz - For My Peeps (OFFICIAL VIDEO)` },
    { platform: 'yt', slug: 'oVgjC5Gw8y0', title: `The Horrorist - One Night In New York City (Uncensored)` },
    { platform: 'yt', slug: 'PubQfGQkRpE', title: `90's Underground Hip Hop - 1 Hour Old School Tracks` },
    { platform: 'yt', slug: 'Qfdh-1AplSk', title: `Niah - "Bets"` },
    { platform: 'yt', slug: 'R_XlJfWakfA', title: `mid 90's intelligent drum and bass mix` },
    { platform: 'yt', slug: 'R8AOAap6_k4', title: `Womack & Womack - Teardrops (Official Video)` },
    { platform: 'yt', slug: 'rBLuvEwIF5E', title: `90's Underground Hip Hop - Rare Tracks` },
    { platform: 'yt', slug: 'rdlvPe959Ck', title: `Roger Sanchez - Another Chance (Directors Cut)` },
    { platform: 'yt', slug: 'RFE66SEwo7Y', title: `Gift of Gab - The Ride of your Life` },
    { platform: 'yt', slug: 'rQtChq8GARw', title: `Massive Töne - Das und Dies (Remix)` },
    { platform: 'yt', slug: 'rzCCahBMwrk', title: `Vy Pole - V` },
    { platform: 'yt', slug: 's5GPuBjOEcA', title: `A-Trak - DJs Gotta Dance More ft. Todd Terry (Official Music Video)` },
    { platform: 'yt', slug: 'S66-QsQJg8I', title: `Hip Hop 1995 I` },
    { platform: 'yt', slug: 'sNUSBi8x4tg', title: `Elvis Presley - A Little Less Conversation (Original Studio Version)` },
    { platform: 'yt', slug: 'sYnrtGCgsM8', title: `Kruder & Dorfmeister - Trans Fatty Acid` },
    { platform: 'yt', slug: 'TDE0EatumPg', title: `Blumentopf - Irgendwie Lieb' ich das 2` },
    { platform: 'yt', slug: 'tsmROPY_zF0', title: `【MV】Draw4 / Kanjou mid night (Track by Missy)` },
    { platform: 'yt', slug: 'uAYEz5tiLHE', title: `La Mezcla (feat. Totó la Momposina) (Paul Kalkbrenner Remix)` },
    { platform: 'yt', slug: 'ulTuqFamxPQ', title: `Kobacchi Ryo - Bilal (ft.HAL-D)` },
    { platform: 'yt', slug: 'un3NkWnHl9Q', title: `Busta Rhymes - Gimme Some More (Official Video) [Explicit]` },
    { platform: 'yt', slug: 'Utu1dvtvqfw', title: `Torch - Kapitel 29` },
    { platform: 'yt', slug: 'vRB1MLGEHSc', title: `Modjo - Lady (Hear Me Tonight) (Radio Edit) (HQ)` },
    { platform: 'yt', slug: 'xStjy860kl8', title: `Torch - Morgen` },
    { platform: 'yt', slug: 'yURRmWtbTbo', title: `Michael Jackson - Don’t Stop 'Til You Get Enough (Official Video)` },
    { platform: 'yt', slug: 'Z2WH42MLgUE', title: `Gabriel Garzón-Montano - 'Everything Is Everything' (Official Video)` },
    { platform: 'yt', slug: 'Z8utqVZ5J7I', title: `U_Know (Olive Oil x Miles Word) / In A Row` },
    { platform: 'yt', slug: 'ZkivTBAMuaE', title: `Atari Teenage Riot - Revolution Action` },
    { platform: 'yt', slug: 'ZXsQAXx_ao0', title: `Shia LaBeouf 'Just Do It' Motivational Speech (Original Video by LaBeouf, Rönkkö & Turner)` },
]
