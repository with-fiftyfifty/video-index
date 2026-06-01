# Video Dataset Contribution Guide

Contributors can help improve the dataset by adding or modifying categories, tags, series, and cast names. Currently, only official or professionally produced content is added. No fan-made or fancam content is currently allowed.

## Object Structure

Each video entry follows this format, sourced from the original platform, extracted via YT-DLP. If you want to submit new content, this format should be used:

```json
		{
		"id": "PvpkTvqVwNY",
		"title": "[하이라이트] 〈히든싱어〉 사상 최초 1대1 정면승부🔥 역대급 난이도의 김장훈 편 최종 우승자는 누구? 5라운드 〈소나기〉 ♪ | 히든싱어8 | JTBC 260414 방송",
		"uploader": "JTBC Music",
		"creators": [],
		"channel_id": "UCEbRSmzD8xASRlYq2OLmCrg",
		"channel_url": "https://www.youtube.com/channel/UCEbRSmzD8xASRlYq2OLmCrg",
		"duration": 203,
		"duration_string": "3:23",
		"upload_date": "20260414",
		"timestamp": 1776175775,
		"description": "[하이라이트] 〈히든싱어〉 사상 최초 1대1 정면승부🔥 역대급 난이도의 김장훈 편 최종 우승자는 누구? 5라운드 〈소나기〉 ♪\n#히든싱어8하이라이트 #김장훈 #소나기\n\n📌 공홈에서 리플레이 : https://tv.jtbc.co.kr/hiddensinger8",
		"tags": [
			"JTBC",
			"Hidden Singer 8",
			"CHANELLE MOON",
			"ATHENA",
			"YEWON",
			"Brief appearance"
		],
		"categories": [
			"Variety",
			"Clips"
		],
		"live_status": "not_live",
		"was_live": false,
		"is_live": false,
		"media_type": "video",
		"webpage_url": "https://www.youtube.com/watch?v=PvpkTvqVwNY",
		"subtitles": [],
		"thumbnail": "https://i.ytimg.com/vi/PvpkTvqVwNY/maxresdefault.jpg",
		"thumbnails": {
			"default": "https://i.ytimg.com/vi/PvpkTvqVwNY/default.jpg",
			"mqdefault": "https://i.ytimg.com/vi/PvpkTvqVwNY/mqdefault.jpg",
			"hqdefault": "https://i.ytimg.com/vi/PvpkTvqVwNY/hqdefault.jpg",
			"sddefault": "https://i.ytimg.com/vi/PvpkTvqVwNY/sddefault.jpg",
			"maxresdefault": "https://i.ytimg.com/vi/PvpkTvqVwNY/maxresdefault.jpg"
		},
		"platform": "youtube",
		"series": [
			"Hidden Singer 8"
		],
		"cast": [
			"CHANELLE MOON",
			"ATHENA",
			"YEWON"
		],
		"status": null
	},
```

**Do not edit** _unless fixing mistakes_:

- id
- title
- uploader
- channel_id
- channel_url
- duration
- upload_date
- timestamp
- webpage_url
- thumbnail and thumbnails
- platform

**Fields you can modify**

- tags
- categories
- series
- cast
- status (null, not available, private)

## Removed Fields

These fields are deprecated. Do not add or update them. They may be removed from the dataset in the future.

- view_count
- like_count
- comment_count

## Categories

Available categories for filtering:

- Music Video
- Variety
- Live Performance
- Radio
- Challenges - For branded/promotional/collab challenges
- Shortfrom Challenges - For general/viral/SNS challenges
- Clips
- Interview
- Behind the Scenes

## Suggested Tags

> Tags from original sources are usually filled with SEO-focused keywords that are not desired. These should be removed.

Use these tags to stay consistent:

- Brief appearance - Also applicable for clips (where they are the main guest but not the focus of the specific clips)
- Dance
- Reaction
- Cover
- _Name of the challenges, show or cast involved can also be added_

Add a new tag only if it can be reused across multiple videos. Tags are more lax, flexible and mainly intended to improve searchability.

## Cast

Every cast member in the content should be added, except for brief appearances. For brief appearances, only FIFTY FIFTY members' names should be added.

Example:

- "YEWON"
- "KEENA"
- "MOON CHANELLE"
- "HANA"
- "ATHENA"
- "MINJU (ILLIT)"
- "ISA (STAYC)"

## Series

Example:

- Fifty Trip
- Pookie Challenge

## Subtitles

Subtitles might be added later after the data is fetched. These can be added if you notice they are missing.

## Guidelines

1. Keep spelling and casing consistent with existing values.
2. Do not remove or rename fields.
3. Only add new categories or tags if they apply across multiple videos.
4. Use English for categories, series, and tags, except for proper names.
5. Refer to existing values for consistency, but be mindful of the original data from the source.

## Example Contribution

Original:

```json
{
	"categories": [],
	"tags": [],
	"series": null,
	"cast": []
}
```

Contribution:

```json
{
	"categories": ["Variety"],
	"tags": ["Brief appearance"],
	"series": "Fifty Trip",
	"cast": ["KEENA", "YEWON"]
}
```

## How to Contribute

1. Fork the repository.
2. Edit only the allowed fields in the JSON files.
3. Open a pull request with your changes.
4. Add a short description of what you updated in the pull request.
