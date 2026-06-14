
# Dataset Contribution Guide

This dataset is a structured snapshot of video metadata from multiple platforms. Current included platforms are YouTube and Weverse.

Only official or professionally produced content is included. Fan made or unofficial uploads are excluded.


# Snapshot Model

This dataset is a snapshot in time, but not fully static.

* Most fields are treated as frozen at ingestion
* A small subset of fields may be updated later when new verified data is available
* Updates must be explicit and controlled, not automatic sync


# Data Source Rule

There are two origins of data:

* Source extracted fields from platform or yt dlp
* Curated enrichment fields maintained by dataset

These must remain clearly separated in intent and handling

Subtitles handling:

* subtitles are initially extracted from the platform when available
* subtitles may be updated later when new official or verified subtitle data becomes available
* if platform subtitles are missing or incomplete, curated updates are allowed


# Extraction Scope Rule

This dataset is a reduced and curated version of yt dlp and platform metadata. It does not store the full raw response.


## What this means

* yt dlp and platform APIs return many additional fields
* These include things like:

  * view counts and like counts
  * upload variations and metadata history
  * automatic captions and subtitle tracks
  * chapters and timestamps
  * format and stream information
  * engagement and recommendation data


## Dataset behavior

* Only fields defined in this schema are stored
* All other yt dlp fields are intentionally excluded
* Missing fields should not be treated as errors or incomplete extraction
* Do not reintroduce excluded yt dlp fields unless explicitly added to the schema


## Contributor rule

* If a field is not listed in the schema, it is out of scope
* Do not assume it should exist in the dataset just because it exists in yt dlp


# Field Lifecycle Rules

Each field belongs to one of these lifecycle types:


## 1. Immutable Identity Fields

Never change after creation.

* id
* platform
* channel_id
* channel_url
* upload_date
* timestamp
* webpage_url
* title
* uploader
* creators
* duration
* duration_string
* description
* live_status
* was_live
* is_live
* media_type
* thumbnail
* thumbnails

Rule:

* Default behavior is no modification
* Updates require explicit justification


## 2. Updatable Enrichment Fields

These are maintained by dataset logic or human curation and may evolve.

* tags
* categories
* series
* cast
* era
* status
* subtitles

Rules:

* These may be updated when new information becomes available
* Original YouTube tags and categories are generally unreliable for representing content intent, as they are often optimized for reach rather than accuracy
* Must remain consistent across dataset with no duplicate variants
* Must reuse existing controlled vocabulary where possible
* Do not create near duplicates with different spelling or casing

Example:
- valid: FIF TAKE
- invalid: FIF Take, fif take, FIFTAKE


# Object Structure

Each video entry follows this format:

```
{
  "id": "hb7SbobvGhY",
  "platform": "youtube",
  "title": "Love this outfit🤍#FIFTYFIFTY #ATHENA #Like_a_Bubble#Imperfect_Iamperfect",
  "uploader": "FIFTY FIFTY Official",
  "creators": [],
  "channel_id": "UCJEER74X9kBenMT_x9iK9Mw",
  "channel_url": "https://www.youtube.com/channel/UCJEER74X9kBenMT_x9iK9Mw",
  "duration": 16,
  "duration_string": "16",
  "upload_date": "20260613",
  "timestamp": 1781316580,
  "description": "",
  "tags": [
    "hate that i made you love me - Ariana Grande",
    "Athena"
  ],
  "categories": [
    "Shortform Challenges"
  ],
  "live_status": "not_live",
  "was_live": false,
  "is_live": false,
  "media_type": "short",
  "webpage_url": "https://www.youtube.com/watch?v=hb7SbobvGhY",
  "subtitles": [],
  "thumbnail": "https://i.ytimg.com/vi/hb7SbobvGhY/maxresdefault.jpg",
  "thumbnails": {
    "default": "https://i.ytimg.com/vi/hb7SbobvGhY/default.jpg",
    "mqdefault": "https://i.ytimg.com/vi/hb7SbobvGhY/mqdefault.jpg",
    "hqdefault": "https://i.ytimg.com/vi/hb7SbobvGhY/hqdefault.jpg",
    "sddefault": "https://i.ytimg.com/vi/hb7SbobvGhY/sddefault.jpg",
    "maxresdefault": "https://i.ytimg.com/vi/hb7SbobvGhY/maxresdefault.jpg"
  },
  "series": [],
  "cast": [
    "Athena"
  ],
  "status": null,
  "era": "Imperfect I'mperfect"
}
```


# Field Reference Table

| Field Name | Data Type | Required | Editable | Description & Constraints |
| :--- | :--- | :---: | :--- | :--- |
| `id` | string | ✅ | ❌ | YouTube Video ID (11 characters). |
| `platform` | string | ✅ | ❌ | Source platform. |
| `title` | string | ✅ | ❌ | Video title |
| `uploader` | string | ✅ | ❌ | Channel display name (e.g., `"FIFTY FIFTY Official"`). |
| `creators` | array/null | ✅ | ❌ | List of specific creators if different from uploader, else `[]` or `null`. |
| `channel_id` | string | ✅ | ❌ | YouTube Channel ID (starts with `UC`). |
| `channel_url` | string | ✅ | ❌ | Full URL to the channel. |
| `duration` | integer | ✅ | ❌ | Total video duration in seconds. |
| `duration_string` | string | ✅ | ❌ | Human-readable duration (e.g., `"3:22"`, `"15"`). |
| `upload_date` | string | ✅ | ❌ | Upload date in `YYYYMMDD` format. |
| `timestamp` | integer | ✅ | ❌ | Unix epoch timestamp of the upload time. |
| `description` | string | ✅ | ❌ | Full video description text. |
| `tags` | array | ✅ | ✅ | Array of string tags. Use `[]` if none exist. |
| `categories` | array | ✅ | ✅ | Array of main categories (e.g., `["Music Video"]`, `["Shortform Challenges"]`). |
| `live_status` | string | ✅ | ❌ | Stream status: `"not_live"`, `"is_live"`, or `"was_live"`. |
| `was_live` | boolean | ✅ | ❌ | `true` if the video was previously a livestream. |
| `is_live` | boolean | ✅ | ❌ | `true` if the video is currently a live broadcast. |
| `media_type` | string | ✅ | ❌ | Content type: `"video"`, `"short"`, or `"livestream"`. |
| `webpage_url` | string | ✅ | ❌ | Full URL to the specific video page. |
| `subtitles` | array/null | ✅ | ✅ | Array of available subtitle language codes (e.g., `["en", "ko"]`), or `null`/[] |
| `thumbnail` | string | ✅ | ❌ | URL to the highest resolution thumbnail available. |
| `thumbnails` | object | ❌ | ❌ | Object containing URLs for different size of thumbails if applicable on the source platform. `default`, `mqdefault`, `hqdefault`, `sddefault`, `maxresdefault`. |
| `series` | array | ✅ | ✅ | Playlist or series name if applicable (e.g., `["FIF TAKE", "FIFTY FILM"]`), else `[]`. |
| `cast` | array | ✅ | ✅ | Array of members/guests featured (e.g., `["Athena", "Keena"]`). |
| `status` | string/null | ✅ | ✅ | Video availability status. `null` if active, or `"Deleted"`, `"Private"`, etc. |
| `era` | string | ✅ | ✅ | Promotional era label (e.g., `"Imperfect I'mperfect"`, `"Love Tune"`). |


# Guidelines

1. Keep spelling and casing consistent with existing values
2. Do not remove or rename fields
3. Only add new categories or tags if they apply across multiple videos
4. Use English for categories series and tags except proper names
5. Prefer existing values before introducing new ones


# How to Contribute

1. Fork the repository
2. You may either add a new video entry to the main dataset array or edit allowed fields
3. Do not modify non editable fields
4. Follow exact object structure when adding entries
5. Ensure all required fields are present
6. Use existing controlled values where possible
7. New values allowed only if no suitable existing value exists
8. Ensure JSON is valid
9. Open a pull request with a short description of changes
