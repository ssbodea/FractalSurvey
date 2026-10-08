# Studiu Fractali

A mobile-friendly web survey for a perception study on fractal images. Participants rate each image for **appreciation** and **complexity**, and guess who made it (AI, animal, amateur, artist, famous artist). Responses are saved to a Google Sheet.

The app is built with **Google Apps Script** (backend) and a single-page **HTML/CSS/JS** frontend (UI in Romanian).

## Live test link

https://script.google.com/macros/s/AKfycbyXioCaYWGm5940eHYR08juTvQdEY6u_WdEuHywwKH-17tgQqxTYkC0BMMvUqulKptE/exec

> Note: every test run that completes the survey appends a real row to the `Responses` sheet. Delete test rows before analysing data.

## Project structure

| File | Role |
|------|------|
| `Code.gs` | Server side: serves the page, holds the image list, validates and stores responses |
| `Index.html` | Client side: intro form, survey UI, image preloading, submission |

## How it works

1. **Intro screen** – the participant selects an age group (`<30`, `30-60`, `>60`) and a profile (`uman` = humanities/arts, `tehnic` = science/IT/engineering). Meanwhile all images are preloaded, with a progress bar. The start button unlocks when loading finishes.
2. **Survey screen** – images are shown one at a time in a **random order** (Fisher–Yates shuffle, different for each participant). For each image the participant gives:
   - appreciation rating (1–5 stars)
   - complexity rating (1–5 stars)
   - author guess: `AN` Animal, `AI` AI, `AM` Amateur, `AR` Artist, `AC` Famous artist
   
   All three answers are required before moving on.
3. **Submission** – after the last image, all answers are sent in a single call (`submitAllResponses`). The server validates everything and appends **one row per participant**.
4. **Thank-you screen** is shown on success; on failure, a retry button appears.

## Image set

40 images defined in the `IMAGES` array in `Code.gs`, hosted on Google Drive (via `lh3.googleusercontent.com/d/<fileId>`). The `author` field is the ground truth (not shown to participants):

| Author code | Images | Count |
|-------------|--------|-------|
| `AI` | `img_001`–`img_010` | 10 |
| `AN` | `img_011`–`img_020` | 10 |
| `AC` | `img_021`–`img_030` | 10 |
| `AR` | `img_031`–`img_040` | 10 |

`AM` (amateur) is a valid answer option, but no images in the set currently have that ground truth.

## Data format

Sheet `Responses` (created and styled automatically by `initSheet()`), one row per participant, with comma-separated values in the image columns. The values at the same position in each column belong to the same image.

| Column | Example |
|--------|---------|
| `age` | `30-60` |
| `profile` | `tehnic` |
| `img_id` | `img_017,img_003,img_031,...` (the order the participant saw them) |
| `img_appreciation_rating` | `4,2,5,...` |
| `img_complexity_rating` | `3,3,5,...` |
| `img_author_guess` | `AN,AI,AR,...` |

To compare guesses with the ground truth, map `img_id` to the `author` in the `IMAGES` array.

## Server-side validation

`submitAllResponses` rejects the submission if:
- age or profile is not in the allowed values
- the number of answers differs from the number of images
- an `img_id` is unknown or duplicated
- a rating is not an integer from 1 to 5
- an author guess is not in `AI, AN, AM, AR, AC`

A `LockService` script lock (15 s wait) prevents concurrent writes from clashing.

## Setup / deployment

1. Create a Google Sheet and copy its ID into `SPREADSHEET_ID` in `Code.gs`.
2. Create a new Apps Script project (script.google.com). Add `Code.gs` and an HTML file named exactly **`Index`** (paste `Index.html`).
3. Make sure the image files on Drive are shared as *Anyone with the link can view*, and update the `IMAGES` array if needed.
4. **Deploy → New deployment → Web app**
   - Execute as: *Me*
   - Who has access: *Anyone*
5. Authorize the permissions on first run and copy the `/exec` URL.
6. After code changes, create a **new deployment version** (or *Manage deployments → Edit → New version*), otherwise the old version stays live.

## Configuration

| What | Where |
|------|-------|
| Target spreadsheet | `SPREADSHEET_ID` |
| Sheet name | `SHEET_NAME` |
| Images and ground-truth authors | `IMAGES` |
| Allowed answer values | `VALID_AGE`, `VALID_PROFILE`, `VALID_AUTHORS` |

If you change the allowed author codes or add options, update both `VALID_AUTHORS` in `Code.gs` and in `Index.html`, and add the matching radio button.

## Notes and limitations

- Data is only saved at the end. If a participant closes the page midway, nothing is recorded.
- Failed image loads show an error placeholder, but the participant can still continue and rate (consider checking for this in the data).
- No participant identifier is stored; the study is anonymous.
- The frontend depends on Font Awesome from cdnjs.
