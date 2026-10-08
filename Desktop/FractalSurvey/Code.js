const SPREADSHEET_ID = '1Pfj01kVWDIcMEEZZ0NGoRC2YFRwzJNiwY94J4_lz6l8';
const SHEET_NAME = 'Responses';

const IMAGES = [
  { id: 'img_001', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1ViMowicNiwg0CTSecZC6tFhmqeeme33V' },
  { id: 'img_002', author: 'AI', url: 'https://lh3.googleusercontent.com/d/118Vq-3zTuzPOSRv-1rgqWyDpq6iw0s07' },
  { id: 'img_003', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1h_WMtc2_AWf_hqL22F71HnpOh2a_DQyj' },
  { id: 'img_004', author: 'AI', url: 'https://lh3.googleusercontent.com/d/10HaHvpIb8JpMHkF66p_r99-4PZNHw7ug' },
  { id: 'img_005', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1jjyWwxqdkXHs_g33BcpUC9fK7EbTLzjj' },
  { id: 'img_006', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1gE862M7Fa0v8pdQHQdtoADiXFplDdz2M' },
  { id: 'img_007', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1WiUdkbApeniWOP9nXE6-HvmLBTfzhLPZ' },
  { id: 'img_008', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1Wma_VnhReyDw3QxJMGNZu5cRs9OEQvKs' },
  { id: 'img_009', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1ZFKseR0NAYGMqdm_f0wDXpdhdQCiW3Y_' },
  { id: 'img_010', author: 'AI', url: 'https://lh3.googleusercontent.com/d/1Zu-DlhFXlTC01tSk3W6PBDRoaL5bhH-o' },
  { id: 'img_011', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1XL9vrgVJ6YQouUiVrKKiEq4-iTh7YGYc' },
  { id: 'img_012', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1Kd4ODcS1kbow3HRXlplOxktSDXLX8Z8G' },
  { id: 'img_013', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1uqIO3JgcvDHlkSL2RsO4-TqlSu9pfzkS' },
  { id: 'img_014', author: 'AN', url: 'https://lh3.googleusercontent.com/d/16XcNXSSOsuB7udjznCgpqVzQveDWwz3x' },
  { id: 'img_015', author: 'AN', url: 'https://lh3.googleusercontent.com/d/15F4PuX5cfJkZ3JUINlkYmvTBh-9nirgZ' },
  { id: 'img_016', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1SJvlMoJbPF789wedZZwFizOSJrcCLlB5' },
  { id: 'img_017', author: 'AN', url: 'https://lh3.googleusercontent.com/d/13WgKgWmwRPm7bVsFcgD9koStKcvsgAta' },
  { id: 'img_018', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1xdZJuYwPXj-W8l07HgekXb8-49rD00xZ' },
  { id: 'img_019', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1cnbi0UPZxnHaI14PGph7dErOnTEKoFgv' },
  { id: 'img_020', author: 'AN', url: 'https://lh3.googleusercontent.com/d/1QhiJL5_YoGmuPXm4TrwN1L8Io5ivCk8k' },
  { id: 'img_021', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1OQ7hthK9qHbGwkdh2CXKzYbhkP88-Gsd' },
  { id: 'img_022', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1JXArFFIDemtn5CX_0zW7TpXwZyeBMMam' },
  { id: 'img_023', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1B-hAHmLpbUblrrmak4Kg-aIGaVujRXWi' },
  { id: 'img_024', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1oImFY17lMgF4KUV2BpU7qUUAfg4DfBnq' },
  { id: 'img_025', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1r3p-8GGMktFOw3gr4mvAvws_VBIBoYH4' },
  { id: 'img_026', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1L_deVtvGiKeJW3pUQZQVbJZ2hgYcM5Qd' },
  { id: 'img_027', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1ploloVQ2kWyHp9wdDA5a2ZSmvq4VVVVf' },
  { id: 'img_028', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1dp39AwTIDBkw0IdTSTgUOHmnhCMvq2uM' },
  { id: 'img_029', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1eWCeS6_1haalTeCQI0YDQfDp0_MXsuPM' },
  { id: 'img_030', author: 'AC', url: 'https://lh3.googleusercontent.com/d/1NpdNAcu8PUj-ixdfw172iji1o0bFS1V1' },
  { id: 'img_031', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1DyHXvRvWkx8UVK8T04WeWSEBidwhR4_3' },
  { id: 'img_032', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1VL0hLPIZltJrJkNlohIDe0XW3P6hzWH3' },
  { id: 'img_033', author: 'AR', url: 'https://lh3.googleusercontent.com/d/105NhwLePDc6EQ9CZ1Xm7xoaqAbEADmsZ' },
  { id: 'img_034', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1RVobB9sH2PwsX89LdGIv2U6dq5nt9jyZ' },
  { id: 'img_035', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1ssIYi31gGeuNx_B7p0AjwyFsLKJEXIgH' },
  { id: 'img_036', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1B11V1UJHwiGInEjYRPzOi26UzimjXD_-' },
  { id: 'img_037', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1zRP-SMMBSNat8f4oBRnuylr24cb7ZkJ1' },
  { id: 'img_038', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1jCDkRVRdgkHgCiXoacrFsx3Zq2xfEXZW' },
  { id: 'img_039', author: 'AR', url: 'https://lh3.googleusercontent.com/d/19k-6-i4_lem5l-5FQ597fvX_tW2NCx0h' },
  { id: 'img_040', author: 'AR', url: 'https://lh3.googleusercontent.com/d/1gb9WEVQNEai8royJVLLcIIU2AJbTVfF-' },
];

const VALID_AUTHORS = ['AI', 'AN', 'AM', 'AR', 'AC'];
const VALID_AGE = ['<30', '30-60', '>60'];
const VALID_PROFILE = ['uman', 'tehnic'];

const HEADERS = [
  'age',
  'profile',
  'img_id',
  'img_appreciation_rating',
  'img_complexity_rating',
  'img_author_guess'
];

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Studiu Fractali')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getImages() {
  return IMAGES;
}

function initSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  const firstCell = sheet.getRange('A1').getValue();
  if (firstCell === '' || firstCell === null) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setBackground('#1a1a2e')
      .setFontColor('#c8b4fa')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    sheet.setColumnWidth(1, 80);
    sheet.setColumnWidth(2, 80);
    sheet.setColumnWidth(3, 400);
    sheet.setColumnWidth(4, 400);
    sheet.setColumnWidth(5, 400);
    sheet.setColumnWidth(6, 400);
  }

  return true;
}

function submitAllResponses(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000);

    const n = IMAGES.length;
    const knownIds = IMAGES.map(img => img.id);

    if (!payload.age || VALID_AGE.indexOf(payload.age) === -1) {
      throw new Error('Invalid age value: ' + payload.age);
    }
    if (!payload.profile || VALID_PROFILE.indexOf(payload.profile) === -1) {
      throw new Error('Invalid profile value: ' + payload.profile);
    }
    if (!payload.answers || payload.answers.length !== n) {
      throw new Error('Expected ' + n + ' answers, got ' + (payload.answers ? payload.answers.length : 0) + '.');
    }

    for (let i = 0; i < n; i++) {
      const a = payload.answers[i];
      if (!a.img_id || knownIds.indexOf(a.img_id) === -1) {
        throw new Error('Unknown img_id "' + a.img_id + '" at position ' + i + '.');
      }
      const rating = parseInt(a.img_appreciation_rating, 10);
      if (isNaN(rating) || rating < 1 || rating > 5) {
        throw new Error('Invalid appreciation rating at position ' + i + ': ' + a.img_appreciation_rating);
      }
      const complexity = parseInt(a.img_complexity_rating, 10);
      if (isNaN(complexity) || complexity < 1 || complexity > 5) {
        throw new Error('Invalid complexity rating at position ' + i + ': ' + a.img_complexity_rating);
      }
      if (!a.img_author_guess || VALID_AUTHORS.indexOf(a.img_author_guess) === -1) {
        throw new Error('Invalid author guess "' + a.img_author_guess + '" at position ' + i + '.');
      }
    }

    const imgIds = payload.answers.map(a => a.img_id);
    const appreciations = payload.answers.map(a => parseInt(a.img_appreciation_rating, 10));
    const complexities = payload.answers.map(a => parseInt(a.img_complexity_rating, 10));
    const guesses = payload.answers.map(a => a.img_author_guess);

    if (imgIds.length !== n || appreciations.length !== n || complexities.length !== n || guesses.length !== n) {
      throw new Error('Column length mismatch after mapping.');
    }

    const seenIds = {};
    for (let j = 0; j < n; j++) {
      if (seenIds[imgIds[j]]) throw new Error('Duplicate img_id: ' + imgIds[j]);
      seenIds[imgIds[j]] = true;
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet not found.');

    sheet.appendRow([
      payload.age,
      payload.profile,
      imgIds.join(','),
      appreciations.join(','),
      complexities.join(','),
      guesses.join(',')
    ]);

    SpreadsheetApp.flush();
    return { success: true };

  } catch (e) {
    throw new Error('Submit failed: ' + e.message);
  } finally {
    lock.releaseLock();
  }
}