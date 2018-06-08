/* This js file is a helper file for the Controls component
 * It returns the proper kana and romaji for Controller to display.
 * It also manages shuffling the characters and toggling between
 * hiragana and katakana.
 */

const hiragana =
  [ 'あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ',
    'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ',
    'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'づ', 'て', 'で',
    'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ',　
    'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ',
    'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る',
    'れ', 'ろ', 'わ', 'を', 'ん' ];

const katakana =
  [ 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'ガ', 'キ', 'ギ', 'ク', 'グ',
    'ケ', 'ゲ', 'コ', 'ゴ', 'サ', 'ザ', 'シ', 'ジ', 'ス', 'ズ', 'セ',
    'ゼ', 'ソ', 'ゾ', 'タ', 'ダ', 'チ', 'ヂ', 'ツ', 'ヅ', 'テ', 'デ',
    'ト', 'ド', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ',
    'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ヘ', 'ベ', 'ペ', 'ホ', 'ボ', 'ポ',
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル',
    'レ', 'ロ', 'ワ', 'ヲ', 'ン' ];

const romaji =
  [ 'a',  'i',  'u',  'e',  'o',  'ka', 'ga', 'ki', 'gi', 'ku', 'gu',
    'ke', 'ge', 'ko', 'go', 'sa', 'za', 'shi', 'ji', 'su', 'zu', 'se',
    'ze', 'so', 'zo', 'ta', 'da', 'chi', 'ji', 'tsu', 'zu', 'te', 'de',
    'to', 'do', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'ba', 'pa', 'hi',
    'bi', 'pi', 'fu', 'bu', 'pu', 'he', 'be', 'pe', 'ho', 'bo', 'po',
    'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru',
    're', 'ro', 'wa', 'wo', 'n' ];

let currentKana = 0;
let isKata = false;

const Kantroller = {
  // returns hira/katakan from the current index
  kana() {
    if(isKata)
      return katakana[currentKana];
    else
      return hiragana[currentKana];
  },

  // returns a romaji representation of the current kana
  romaji() {
    return romaji[currentKana];
  },

  // toggles the Kantroller between returning
  // katakana or hiragana
  toggleKana() {
    isKata = !isKata;
  },

  // move to the next kana, if it reaches the end
  // it will move to the 0th element
  next() {
    currentKana = (currentKana + 1) % hiragana.length;
  },

  // move to the previous kana, if it reaches the beginnig
  // it will move to the end element
  prev() {
    currentKana = currentKana - 1;
    if(currentKana < 0)
      currentKana = hiragana.length - 1;
  },

  // returns a random number in range [0, hiragana size)
  random() {
    return Math.floor(Math.random() * Math.floor(hiragana.length));
  },

  // visits each kana index and swaps that kana with a different
  // random spot, it is important to swap hiragana, katakana, and
  // romaji all between the same two indices otherwise everything
  // becomes bungled
  shuffle() {
    for(let i = 0; i < hiragana.length; i++) {
      let currHiragana = hiragana[i];
      let currKatakana = katakana[i];
      let currRomaji = romaji[i];
      const shuffleIndex = this.random();
      hiragana[i] = hiragana[shuffleIndex];
      katakana[i] = katakana[shuffleIndex];
      romaji[i] = romaji[shuffleIndex];
      hiragana[shuffleIndex] = currHiragana;
      katakana[shuffleIndex] = currKatakana;
      romaji[shuffleIndex] = currRomaji;
    }
  }
};

export default Kantroller;
