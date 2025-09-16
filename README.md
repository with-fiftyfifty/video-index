# Video Dataset Contribution Guide

Contributors can help improve the dataset by adding or modifying categories, tags, series, and cast names. Currently, only official or professionally produced content is added. No fan-made or fancam content is currently allowed.

## Object Structure

Each video entry follows this format, sourced from the original platform, extracted via YT-DLP. If you want to submit new content, this format should be used:

```json
	{
		"id": "S4M6tAictVs",
		"title": "Who's the NEXT #Pookie 🩷 마법에 걸리게 \"꿍실냐옹\" 🪄🐈‍⬛🐾  #아일릿 #윤아 선배님과 함께한 #Pookie_Challenge 💞 @ILLIT_official",
		"uploader": "FIFTY FIFTY Official",
		"channel_id": "UCJEER74X9kBenMT_x9iK9Mw",
		"channel_url": "https://www.youtube.com/channel/UCJEER74X9kBenMT_x9iK9Mw",
		"duration": 20,
		"duration_string": "20",
		"upload_date": "20250824",
		"timestamp": 1756004424,
		"view_count": 910,
		"like_count": 156,
		"release_timestamp": null,
		"comment_count": 8,
		"description": "Who's the NEXT #Pookie 🩷\n마법에 걸리게 \"꿍실냐옹\" 🪄🐈‍⬛🐾 \n#아일릿 #윤아 선배님과 함께한 #Pookie_Challenge 💞\n\n#FIFTYFIFTY #피프티피프티\n#CHANELLEMOON #문샤넬\n#YEWON #예원\n#ILLIT #YUNAH\n#푸키챌린지",
		"tags": [
			"ILLIT"
		],
		"categories": [
			"Music",
			"Challenges"
		],
		"live_status": "not_live",
		"was_live": false,
		"is_live": false,
		"media_type": "short",
		"webpage_url": "https://www.youtube.com/watch?v=S4M6tAictVs",
		"subtitles": null,
		"thumbnail": "https://i.ytimg.com/vi/S4M6tAictVs/maxresdefault.jpg",
		"thumbnails": {
			"default": "https://i.ytimg.com/vi/S4M6tAictVs/default.jpg",
			"mqdefault": "https://i.ytimg.com/vi/S4M6tAictVs/mqdefault.jpg",
			"hqdefault": "https://i.ytimg.com/vi/S4M6tAictVs/hqdefault.jpg",
			"sddefault": "https://i.ytimg.com/vi/S4M6tAictVs/sddefault.jpg",
			"maxresdefault": "https://i.ytimg.com/vi/S4M6tAictVs/maxresdefault.jpg"
		},
		"platform": "youtube",
		"series": "Pookie Challenge",
		"casts": [
			"YEWON",
			"CHANELLE MOON",
			"YUNAH (ILLIT)"
		]
	}
```

**Do not edit** *unless fixing mistakes*:
* id
* title
* uploader
* channel_id
* channel_url
* duration
* upload_date
* timestamp
* webpage_url
* thumbnail and thumbnails
* platform

**Fields you can modify**
* tags
* categories
* series
* cast

## Removed Fields

These fields are deprecated. Do not add or update them. They may be removed from the dataset in the future.

* view_count
* like_count
* comment_count

## Categories

Available categories for filtering:

* Music Video
* Variety
* Live Performance
* Radio
* Challenges - For branded/promotional/collab challenges
* Shortfrom Challenges - For general/viral/SNS challenges
* Clips
* Interview
* Behind the Scenes

## Suggested Tags
> Tags from original sources are usually filled with SEO-focused keywords that are not desired. These should be removed.

Use these tags to stay consistent:

* Brief appearance
* Dance
* Reaction
* Cover
* *Name of the challenges, show or cast involved can also be added*

Add a new tag only if it can be reused across multiple videos. Tags are more lax, flexible and mainly intended to improve searchability.

## Cast

Every cast member in the content should be added, except for brief appearances. For brief appearances, only FIFTY FIFTY members' names should be added.

Example:

* "YEWON"
* "KEENA"
* "MOON CHANELLE"
* "HANA"
* "ATHENA"
* "MINJU (ILLIT)"
* "ISA (STAYC)"

## Series

Example:

* Fifty Trip
* Pookie Challenge

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

