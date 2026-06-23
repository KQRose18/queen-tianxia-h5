# Audio Credits

This file tracks audio sources, usage, loop behavior, suggested mix levels, and placeholder status for the MVP.

## BGM

| File | Path | Usage scene | Loop | Suggested volume | Fade notes | Source / license | Placeholder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `bgm_intro_ascension.mp3` | `assets/audio/bgm/bgm_intro_ascension.mp3` | Startup / opening CG / ascension sequence | Yes | 0.46 | Fade in 0.4s after start button; fade out 0.6s when entering home | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_home_jindeng_study.mp3` | `assets/audio/bgm/bgm_home_jindeng_study.mp3` | Home / default palace UI / harem browsing | Yes | 0.38 | Fade in 0.5s after intro; duck under voice lines if needed | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_shenyan_study_romance.mp3` | `assets/audio/bgm/bgm_shenyan_study_romance.mp3` | Shen Yan personal story / study romance scenes | Yes | 0.38 | Crossfade 0.5s from home BGM | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_xiaozhao_battlefield.mp3` | `assets/audio/bgm/bgm_xiaozhao_battlefield.mp3` | Xiao Zhao personal story / battlefield tension | Yes | 0.38 | Crossfade 0.5s from home BGM | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_rongyu_banquet.mp3` | `assets/audio/bgm/bgm_rongyu_banquet.mp3` | Rong Yu personal story / banquet / romance | Yes | 0.38 | Crossfade 0.5s from home BGM | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_xiechangli_merchant.mp3` | `assets/audio/bgm/bgm_xiechangli_merchant.mp3` | Xie Changli personal story / merchant / market mood | Yes | 0.38 | Crossfade 0.5s from home BGM | User-provided generated BGM. User must retain generation tool/license record. | No |
| `bgm_peiwujiu_rain_assassin.mp3` | `assets/audio/bgm/bgm_peiwujiu_rain_assassin.mp3` | Pei Wujiu personal story / rain night assassin / crisis | Yes | 0.38 | Crossfade 0.5s from home BGM | User-provided generated BGM. User must retain generation tool/license record. | No |

## SFX

| File | Path | Trigger point | One-shot / loop | Suggested volume | Fade notes | Source / license | Placeholder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ui_click.wav` | `assets/audio/sfx/ui_click.wav` | Any button tap | One-shot | 0.8 | None | Kenney UI Audio / Interface Sounds, CC0. Source: https://kenney.nl/assets/ui-audio | Temporary placeholder |
| `ui_tab.wav` | `assets/audio/sfx/ui_tab.wav` | Bottom tab switch | One-shot | 0.75 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `choice_select.wav` | `assets/audio/sfx/choice_select.wav` | Story choice selected | One-shot | 0.8 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `market_buy.wav` | `assets/audio/sfx/market_buy.wav` | Market buy action | One-shot | 0.85 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `market_sell.wav` | `assets/audio/sfx/market_sell.wav` | Market sell action | One-shot | 0.85 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `sfx_coin_small.mp3` | `assets/audio/sfx/sfx_coin_small.mp3` | Small coin reward / buy feedback / tutorial +1000 wealth | One-shot | 0.9 | None | User-selected Pixabay sound effect: `film-special-effects-drop-coin-384921`. Pixabay Content License; user downloaded from https://pixabay.com/sound-effects/film-special-effects-drop-coin-384921/ | No |
| `sfx_coin_big.ogg` | `assets/audio/sfx/sfx_coin_big.ogg` | Big coin reward / sell profit / coin rain | One-shot | 0.9 | None | Copied from `coin_jingle_cc0.ogg`, OpenGameArt coin sounds, CC0. Source: https://opengameart.org/content/coin-sounds | Temporary placeholder |
| `coin_jingle_cc0.ogg` | `assets/audio/sfx/coin_jingle_cc0.ogg` | Legacy coin source / fallback | One-shot | 0.9 | None | OpenGameArt coin sounds, CC0. Source: https://opengameart.org/content/coin-sounds | Temporary placeholder |
| `edict_stamp.wav` | `assets/audio/sfx/edict_stamp.wav` | Edict approved | One-shot | 0.85 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `unlock_reveal.wav` | `assets/audio/sfx/unlock_reveal.wav` | New consort unlock | One-shot | 0.9 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `affection_up.wav` | `assets/audio/sfx/affection_up.wav` | Favor increase / story result | One-shot | 0.8 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `story_open.wav` | `assets/audio/sfx/story_open.wav` | Story player open / story progress | One-shot | 0.75 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `error_soft.wav` | `assets/audio/sfx/error_soft.wav` | Error / insufficient resource | One-shot | 0.72 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |
| `rank_up.wav` | `assets/audio/sfx/rank_up.wav` | Rank up / leaderboard feedback | One-shot | 0.85 | None | Kenney UI Audio / Interface Sounds, CC0 | Temporary placeholder |

## Voice / TTS

Voice manifest rule: only map exact lines cut from the generated line source audio. Exact extraction from a displayed line is allowed only for full line, text after a colon, or text inside quotes. Do not map similar or rewritten lines to real voice files.

| Files | Path | Usage scene | One-shot / loop | Suggested volume | Fade notes | Source / license | Placeholder |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `shen_001.wav` - `shen_012.wav` | `assets/voice/generated/shen/` | Shen Yan spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_shenyan_1.mp3`, split locally. User must retain generation tool/license record. | No |
| `shen_story_001.wav` - `shen_story_017.wav` | `assets/voice/generated/shen_story/` | Shen Yan story chapter 1-6 spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_shenyan_story_1_wenrunnansheng.mp3`, split locally. User must retain generation tool/license record. | No |
| `xiao_001.wav` - `xiao_012.wav` | `assets/voice/generated/xiao/` | Xiao Zhao spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_xiaozhao_1.mp3`, split locally. User must retain generation tool/license record. | No |
| `rong_001.wav` - `rong_012.wav` | `assets/voice/generated/rong/` | Rong Yu spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_rongyu_1.mp3`, split locally. User must retain generation tool/license record. | No |
| `xie_001.wav` - `xie_012.wav` | `assets/voice/generated/xie/` | Xie Changli spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_xiechangli_1.mp3`, split locally. User must retain generation tool/license record. | No |
| `pei_001.wav` - `pei_012.wav` | `assets/voice/generated/pei/` | Pei Wujiu spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.96 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_peiwujiu_1_credibleAlex_zhipuziran.mp3`, split locally. User must retain generation tool/license record. | No |
| `narrator_001.wav` - `narrator_017.wav` | `assets/voice/generated/narrator/` | Narrator spoken lines; mapped by `assets/voice/manifest.json` | One-shot | 0.92 | Stop previous line before playing next; no fade | User-generated TTS from `C:\Users\lixinwei\Music\line_narrator_1_wenrouxuejie.mp3`, split locally. User must retain generation tool/license record. | No |

## Missing / To Replace

- Final custom `sfx_coin_big` should replace the temporary OpenGameArt CC0 coin jingle.
- Opening intro must be split into matching displayed narration lines before the narrator voice pack can play during the CG sequence.
- If using Hailuo / MiniMax / ElevenLabs / SoulX-Podcast for final voice, record the platform, account/license terms, generation date, and whether commercial use is permitted.
