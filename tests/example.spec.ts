import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert a simple daily statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' naan kadaiku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0002 - Convert an interrogative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' avanukku epdi irundhadhu?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0003 - Convert a polite request ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('jesi naalai varuvaala? Avaludaya udavi thevai ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0004 - Present tense activity  ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan thatpodhu saapudren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0005 -  Future tense activity ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan naalai kandiku selven');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0006 -  Compound sentence  ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan kovillukku sendren aanaal amma varavillai');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0007 -  Complex conditional sentence ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('avan irupn endraal sollu naan seigiren piragu nee thodardhu sei');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0008 -  Negative sentence form ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' vimal adhanai eriya maatan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0009 -   Plural pronoun usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' avargal naalai vilayaduvaargal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0010 -    Imperative command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' ange vaa');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});
test('Pos_Fun_0011 -   Mixed Thanglish+ English', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' innaiku office la project meeting irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0012 -   Mixed Thanglish+ English', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' innaiku office la project meeting irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0013 -   Place name preserved', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' naan Colombo pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0014 -   Past tense event', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('  naan netru velai mudichen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0015 -  Question with person name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('  Ravi enna sonnaru?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0016 -  Currency mention', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' ithu Rs. 500 ku kidaikkum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0017 -  Date included', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' exam 10/02/2026 la irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0018 -   Extra spaces handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' naan   school   pogiren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0019 -   Extra spaces handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' naan veetukku pogiren nee enna seigira?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0020 -  Long paragraph input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' innaiku romba busy ah irundhuchu adunaala naan nalaiku avanoda poitu elathayum eduthu varalamunu paathen neeyum mudindhal vaa ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0021 -  English abbreviation handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' naan ID card va eduthu show pannen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0022 - Politeness variation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' please konjam seekiram reply pannunga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0023 - Informational statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' inniki weather romba nallaa irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0024 - Plural noun usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('pengal veetukku vanthaargal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0001 - Missing word separation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanschoolpogiren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0002 -  Excessive punctuation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enna idhu!!!!????');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0003 -  Mixed English sentence structure', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naalaki naan anga poven becacause aval naalaki varamaatal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0004 - Slang-heavy input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('dei da enna scene da');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0005 - Incorrect tense logic', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('daan naalai office ponaen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0006 - Non-standard number format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting seven thirty ku irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0007 - Abbreviation overload', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan ATM PIN OTP ellam marandhutten');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0008 -  Random capitalization', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('NaAn ScHoOl PoGrEn');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0009 - Unsupported emoji input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan happy 😊 irukken');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0010 - Incorrect word order', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('school naan innaiku pogiren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_UI_0001 - Verify language toggle behavior', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('please konjam help pannunga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

